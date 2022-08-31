import React from 'react'; 

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="alpha">Alpha</option>
              <option value="beta">Beta</option>
              <option value="gamma">Gamma</option>
              <option value="delta">Delta</option>
              <option value="zeta">Zeta</option>
              <option value="eta">Eta</option>
              <option value="theta">Theta</option>
              <option value="iota">Iota</option>
              <option value="kappa">Kappa</option>
              <option value="lambda">Lamda</option>
              <option value="mu">Mu</option>
              <option value="nu">Nu</option>
              <option value="xi">Xi</option>
              <option value="omicron">Omicron</option>
              <option value="pi">Pi</option>
              <option value="rho">Rho</option>
              <option value="sigma">Sigma</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Dropdown; 