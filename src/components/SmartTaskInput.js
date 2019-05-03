import React, { Component } from "react";
import { days, months, years } from "../validation/dates";

class SmartTaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: {},
            task: "",
        };
    }

    checkInputForDate = (taskArray, datesToSearch) => {
        let foundDate = null;

        taskArray.forEach(word => {
            const searchedWord = word.toLowerCase();
            if (datesToSearch.indexOf(searchedWord) > -1) {
                foundDate = searchedWord;
            }
        });

        return foundDate;
    };

    onChange = e => {
        e.preventDefault();
        const { value: task } = e.target;
        const taskArray = task.split(" ");

        this.setState(prevState => ({
            date: {
                ...prevState.date,
                day: this.checkInputForDate(taskArray, days),
                month: this.checkInputForDate(taskArray, months),
                year: this.checkInputForDate(taskArray, years),
            },
            task,
        }));
    };

    render() {
        const { month, day, year } = this.state.date;
        const { task } = this.state;
        return (
            <div>
                <input type='text' value={this.state.task} onChange={this.onChange} />
                <p>Your task is: {task}</p>
                <p>
                    Due: {day} {month} {year}
                </p>
            </div>
        );
    }
}

export default SmartTaskInput;
