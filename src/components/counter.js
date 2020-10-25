import React , { Component } from "react";

class Counter extends Component{


	renderTags(){
		if(this.state.tag.length===0 )
			return <p>List empty!!!</p>;

		else{
			return (
				<ul>
					{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
				</ul>
			)
		}
	}



	render(){



		return ( 

		<div>
			<span className={this.getBatchClasses()}>{this.formatvalue()}</span>
			<button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-success btn-sm">increment</button>
			<button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

		</div>

		);
	}

	

	getBatchClasses(){
		let classes = "badge m-2 badge-";
		return classes += this.props.counter.value===0 ? "warning" : "primary";
	}

	formatvalue(){
		const {value} = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;