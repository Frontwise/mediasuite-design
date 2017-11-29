import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SortTable extends Component {
  constructor(props){
    super(props);

    this.state={
      items: props.items,
      sort:{
        field: null,
        order: 'asc'
      }
    }
  }


  /**
   * Sort projects
   */
  sort(field){
    let sort = {
        field: field,
        order: this.state.sort.field === field && this.state.sort.order === 'asc' ? 'desc' : 'asc'
      };

    this.setState({
      sort,
      items: this.props.sort(this.props.items, sort),
    });

  }


  getHeader(index, field, content, sortable){
    let active = sortable && this.state.sort.field === field;
    let sortFunc = sortable ? {onClick: this.sort.bind(this, field)} : {};
    return (
      <th key={index} 
          className={classNames({sortable, active, 'desc': active && this.state.sort.order === 'desc' })}
          {...sortFunc}>
          {content}</th>
    );
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.items !== this.state.items){
      this.setState({items: nextProps.sort(nextProps.items, this.state.sort)});
    }
  }


  render() {
    return (
      <div className="SortTable">

        { this.state.items.length ?
          <table>
            <thead>
              <tr>
                {this.props.head.map((head, index)=>(this.getHeader(index, head.field, head.content, head.sortable)))}
              </tr>
            </thead>
            <tbody className={this.props.loading ? 'loading': ''}>
              {this.props.items.map((item)=>(this.props.row(item)))}           
            </tbody>
          </table>
          :
          this.state.loading ?
            <h3 className="error">Loading...</h3>
            :
            <h3 className="error">No results</h3>

        }
      </div>
    );
  }
}

SortTable.propTypes = {
  items: PropTypes.array.isRequired,
  head: PropTypes.array.isRequired,
  row: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
}

export default SortTable;
