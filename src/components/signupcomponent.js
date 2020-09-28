import React from 'react';
import '../landingpage.css'
import { Input, Button } from '@material-ui/core';


export default class SignUpComponent extends React.Component {
    state = {
        value: '',
        emails: [],
        error: null
    }

    
    handleSubmit = () => {
        var email = this.state.value.trim();
        if(email && this.isValid(email)) {
            this.setState({
                emails: [...this.state.emails, email], //this.state immutable!
                value: ''            
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
            error: null
        }); //reset error msg
    };

    //can we add some blur event 
    handleKeyDown = (e) => {
        if (['Enter', 'Tab', ','].includes(e.key)) { //check triggers
            e.preventDefault();
            this.handleSubmit();
        }
    };

    isValid(email) {
        var error = null;
        
        if (!this.isEmail(email)) {
          error = `${email} is not a valid email address.`;
        }
        if (this.isInList(email)) {
          error = `${email} has already been added.`;
        }
        if (error) {
          this.setState({ error });  
          return false;
        }

        return true;
      }

    //verify RegEx (spaces)??
    isEmail(email) {
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }

    isInList(email) {
        return this.state.emails.includes(email);
    }

    handlePaste = (e) => {
        e.preventDefault();
        
        var paste = e.clipboardData.getData('text'); //pull string from clipboard
        var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g); //TODO: map with isEmail() for cleanliness
        var emails = this.isEmail(paste);
        
        if (emails) {
          var toBeAdded = emails.filter(email => !this.isInList(email)); //exclude emails already in our list
          
          this.setState({
            emails: [...this.state.emails, ...toBeAdded]
          });
        }
      };

    render() {
        return (
            <div classname="header-in-masthead"> 
                <h1 className="text-in-masthead">{this.props.message}</h1>
                    {/* {this.state.emails.map(email => <div key={email}>{email}</div>)} */}
                <div className="input-container">
                    <Input 
                        className="input-in-masthead"
                        display="flex" 
                        width={500} height={80} 
                        alignItems="center"
                        justify="center"
                        color="red"
                        type="email" 
                        placeholder="Your E-Mail Address"
                        name={'input' + (this.state.error && ' has-error')}
                        value={this.state.value}
                        onChange={this.handleChange} 
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                this.handleSubmit()
                            }
                        }}
                    />        

                    <Button 
                        type="submit" 
                        onClick={this.handleSubmit}
                    > 
                    Submit email
                    </Button>

                    {this.state.error &&
                        <p className="error">{this.state.error}</p>}
                </div>
            </div>
        
        );
    }
}