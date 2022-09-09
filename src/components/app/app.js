import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            data:[
                { name: 'Taras', salary: 1200,increase:true,id:1,like:true  },
                { name: 'Nika', salary: 800,increase:false,id: 2,like:false },
                {name: 'Alex', salary: 600,increase:false,id:3,like:false }
            ],
            
        }
        this.maxId = 4
    }

    onDelete  = (id) => { 
        this.setState(({ data }) => { 
            return {
                data:data.filter(item=> item.id !== id)
            }
        })
    }

    onAdd = (name, salary) => { 
        
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++,
            like: false 
        }
        this.setState(({ data }) => { 
            const newArr = [...data, newItem]
            return {
                data:newArr
            }
        })
    }

    render() { 
        
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <AppSearch />
                    <AppFilter />
                </div>
                <EmployersList
                    data={this.state.data}
                    onDelete={ this.onDelete} 
                     />
                <EmployersAddForm onAdd={this.onAdd } />,
                
          </div>
      );
    }
}
export default App;
