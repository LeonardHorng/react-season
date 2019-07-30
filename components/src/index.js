import ReactDOM from 'react-dom';
import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App =() => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning</h4>
                    Are you sure want to do this?</div></ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" date="Today at 6:00pm" comment="Nice blog" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Alex" date="Today at 7:00pm" comment="Nice flag" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Sean" date="Today at 13:00pm" comment="Nice friends" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
