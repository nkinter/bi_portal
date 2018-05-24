import React, {Component} from 'react';
import List from './list';

export default class FilteredList extends Component {
    constructor(){
        super();
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items: []
        };
        this.filterList = this.filterList.bind(this)
    }

    filterList(event){
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    componentWillMount(){
        this.setState({items: this.state.initialItems})
    }

    render(){
        return (
            <div className="filter-list">
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                    </fieldset>
                </form>
                <List items={this.state.items}/>
            </div>
        );
    }
}