import React from "react";
// import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

// components
import PageTitle from "../../components/common/PageTitle";

const UserView = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Users"
        subtitle="overview"
        className="text-sm-left mb-3"
      />
    </Row>
  </Container>
);

UserView.propTypes = {};

UserView.defaultProps = {};

export default UserView;
