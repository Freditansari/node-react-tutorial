import React, { Component } from "react";
import Contact from "./Contact";
/**
 * how  to connect components to redux
 * 1. import these two libraries:
 *  import { connect } from "react-redux";


 *   2. change this line export default Contact; to export default connect()Contact;

*/
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_CONTACTS } from "../../actions/types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  // state = {

  // };

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
