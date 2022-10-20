import React, {Component} from "react";
import { categorys } from "./globalValues";

export class CategoryCheckBox extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
      
    });
  }


  render() {
    return (
      
      <div className="bg-[#5A2317]/70 lg:rounded-lg w-full h-auto px-5 mt-[7%] sm:w-full md:mx-auto lg:mx-auto">
          <div className="h-24 flex justify-center items-center">
            <p className="uppercase font-bold text-2xl text-center text-white/90">
              CATEGORY
            </p>
          </div>
          <div className="flex space-x-10 items-center py-2">
         
         <input
           type="radio"
           value={categorys[0]}
           checked={this.state.selectedOption === categorys[0]}
           onChange={this.onValueChange}
           className="ml-4"
         />
         <p className={`text-xl font-semibold uppercase text-white/90 `}>{categorys[0]}</p>
     </div>
        <div className="flex space-x-10 items-center py-2">
         
            <input
              type="radio"
              value={categorys[1]}
              checked={this.state.selectedOption === categorys[1]}
              onChange={this.onValueChange}
              className="ml-4"
            />
            <p className={`text-xl font-semibold uppercase text-white/90 `}>{categorys[1]}</p>
        </div>
        <div className="flex space-x-10 items-center py-2">
         
         <input
           type="radio"
           value={categorys[2]}
           checked={this.state.selectedOption === categorys[2]}
           onChange={this.onValueChange}
           className="ml-4"
         />
         <p className={`text-xl font-semibold uppercase text-white/90 `}>{categorys[2]}</p>
     </div>
     <div className="flex space-x-10 items-center py-2 pb-10">
         
         <input
           type="radio"
           value={categorys[3]}
           checked={this.state.selectedOption === categorys[3]}
           onChange={this.onValueChange}
           className="ml-4"
         />
         <p className={`text-xl font-semibold uppercase text-white/90 `}>{categorys[3]}</p>
     </div>
     
    </div>
    
    );
  }
};
