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
}
