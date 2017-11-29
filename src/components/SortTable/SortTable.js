import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SortTable extends Component {
  constructor(props){
    super(props);

    this.state={
      items: props.items,
      selection: [],
      sort:{
        field: null,
        order: 'asc'
      }
    }
  }


  /**
   * Sort projects based on the given field
   * @oaram {string} field Unique sort field
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

  /**
   * Get a header <th> element
   * @param  {number} index For unique key
   * @param  {string} field Unique field name for sorting
   * @param  {Symbol} 
   * @param  {[type]}
   * @return {[type]}
   */
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

  /**
   * New props, update the state
   * @param  {object} nextProps 
   */
  componentWillReceiveProps(nextProps){
    if (nextProps.items !== this.state.items){
      this.setState({
        items: nextProps.sort(nextProps.items, this.state.sort),
        selection: []
      });
    }
  }

  /**
   * Select all items
   * @param  {SyntheticEvent} e Event
   */
  selectAll(e){
    this.setState({
      selection: e.target.checked ? this.state.items.slice() : []
    });
  }

 /**
  * Select an item
  * @param  {object} item Item
  * @param  {SyntheticEvent} e    Event
  */
  selectItem(item, e){
    this.setState({
       selection: e.target.checked ? 
          // add if not in the array yet
          this.state.selection.includes(item) ? this.state.selection : [...this.state.selection, item]
          :
          // remove
          this.state.selection.filter((selected)=>(selected !== item))
    });
  }

  render() {
    return (
      <div className="SortTable">

        { this.state.items.length ?
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" checked={this.state.selection.length === this.state.items.length} onChange={this.selectAll.bind(this)} /></th>
                {this.props.head.map((head, index)=>(this.getHeader(index, head.field, head.content, head.sortable)))}
              </tr>
            </thead>
            <tbody className={this.props.loading ? 'loading': ''}>

              {this.props.items.map((item, index)=>(
                <tr key={index}>
                  <td><input type="checkbox" checked={this.state.selection.includes(item)} onChange={this.selectItem.bind(this, item)} /></td>                    
                  { this.props.row(item).map((td, index)=>(<td key={index} {...td.props}>{td.content}</td>)) }
                </tr>
                ))}           
            </tbody>
          </table>
          :
          this.state.loading ?
            <h3 className="error">Loading...</h3>
            :
            <h3 className="error">No results</h3>
        }
        <p>Todo: Pagination</p>
        <p>Todo: With selected: [ Actions \/ ]</p>
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
