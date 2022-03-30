import React from 'react';


export class ClassCounter extends React.Component {

    constructor(props){
        super(props);
        
        this.state={
            value: 0,
        };

        this.minus = this.minus.bind(this);
    };
 


    plus = () => {
        this.setState(({ value }) => {
            return {
                value: value + 1,
            };
        });
    };

    // minus = () => {
    //     this.setState(({ value }) => {
    //         return {
    //             value: value - 1,
    //         };
    //     });
    // };

    minus(){
        this.setState({value: this.state.value - 1})
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <h1>
                    {value}
                </h1>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    };
};