import React from "react";
import Table from "./Table"

// 메인 앱 컴포넌트
class App extends React.Component {
    render() {
        return (
            <div className="mainWrapper">
                <h1>hello World!</h1>
                <Table/>
            </div>
        )
    }
};

export default App;