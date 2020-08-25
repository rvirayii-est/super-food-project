import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem,
    Progress
} from "shards-react";

const UserProfileDetails = ({ UserProfileDetails }) => (
    <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
                <img
                    className="rounded-circle"
                    src={UserProfileDetails.avatar}
                    alt={UserProfileDetails.name}
                    width="110"
                />
            </div>
            <h4 className="mb-0">{UserProfileDetails.name}</h4>
            <span className="text-muted d-block mb-2">{UserProfileDetails.jobTitle}</span>
            <Button pill outline size="sm" className="mb-2">
                <i className="material-icons mr-1">person_add</i> Verify Now
      </Button>
        </CardHeader>
        <ListGroup flush>

            <ListGroupItem className="px-4">
                <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                        {UserProfileDetails.accountReportTitle}
                    </strong>
                    <Progress
                        className="progress-sm"
                        value={UserProfileDetails.accountReportValue}
                    >
                        <span className="progress-value">

                            {UserProfileDetails.accountStatusValue}
                        </span>
                    </Progress>
                </div>
            </ListGroupItem>
            {/* <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    {UserProfileDetails.metaTitle}
                </strong>
                <span>{UserProfileDetails.metaValue}</span>
            </ListGroupItem> */}
        </ListGroup>
    </Card>
);

UserProfileDetails.propTypes = {
    /**
     * The user details object.
     */
    UserProfileDetails: PropTypes.object
};

UserProfileDetails.defaultProps = {
    UserProfileDetails: {
        name: "Json Chu",
        avatar: require("./../../images/avatars/0.jpg"),
        jobTitle: "",
        // performanceReportTitle: "Profile",
        // performanceReportValue: 74,
        accountReportTitle: "Account Level",
        accountReportValue: 0,
        accountStatusValue: "Not Verified",
        metaTitle: "Description",
        metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    }
};

export default UserProfileDetails;
