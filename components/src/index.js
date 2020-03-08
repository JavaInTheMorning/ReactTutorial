// import 
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// Create
const App = () => {
    return (
    <div className="ui container comments">
    <ApprovalCard>
        Are you sure you want to do this?
    </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                fullName={faker.name.firstName()} 
                avatar={faker.image.avatar()}
                timeAgo={faker.date.weekday()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                fullName={faker.name.firstName()} 
                avatar={faker.image.avatar()}
                timeAgo={faker.date.weekday()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                fullName={faker.name.firstName()} 
                avatar={faker.image.avatar()}
                timeAgo={faker.date.weekday()}
            />
        </ApprovalCard>
    </div>
    );
};

// Render
ReactDOM.render(<App/>, document.querySelector('#root'));