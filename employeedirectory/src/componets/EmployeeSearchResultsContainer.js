import React, { Component, componets } from "react";
import EmployeeSearchFrom from "./EmployeeSearchForm";
import EmployeeSearchResultsContainer from "./EmployeeSearchResultsContainer";
import API from "../utils/API";

class EmployeeSearchResultsContainer extends Component {
    state ={
        sortAsc:true,
        employees:[],
        search: "",
        filteredemployees:[],
    };

    get employeesinfo() {
        return {
            name:"",
            email:"",
            phone:"",
            dob:"",
            department:"",
        }
    }
 // When this component mounts, search the  API for users
    componentDidMount() {
        this.searchRandom("users");
    }

    searchRandom = query => {
        API.search(query)
        .then(res => this.setState ({ results: res.data.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ search: value });
        this.filteredemployees(value.toLowerCase().trim());
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    sortStaff = ((key,primary = 0, secondary =0) => {
        function compareAsc (a, b){
            if(a.name.first > b.name.first) return -1
            if(b.name.first . a.name.first) return  1
            return 0;
        }
        if(this.state.sortAsc) {
            const sortedStaff = this.state.emplpoyees.sort(compareAsc)
            this.setState({
                filteredemployees:sortedStaff,
                sortAsc:false
            })
        }
        else {
            const sortedStaff = this.state.employees.sort(compareDesc)
            this.setState({
                filteredemployees:sortedStaff,
                sortAsc:true
            });
        }
        filteremployees = (input) => {
            if (input) {
                this.setState ({
                    filteredemployees:this.state.employees.filter((employee) => {
                        return (
                            employee.name.first
                            .toLowerCase()
                            .concat("", employee.name.last.toLowerCase())
                            .includes(input) ||
                            employee.phone.includes(input) ||
                            employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
                            employee.email.includes(input) ||
                            this.formatDate(employee.dob.date).includes(input)
                        );
                    }),
                });
            }
        } elese {
            this.setState({ filteredemployees: this.state.employees });
        }
        formatDate = (date) => {
            date = new Date(date);
            let dob = [];
            dob.push(("0" + (date.getMonth() + 1)).slice(-2));
            dob.push(("0" + date.getDate()).slice(-2));
            dob.push(date.getFullYear());
        
            // ioinnning formatted date
            return dob.join("-");
          };


        render() {

        }
    })

}
