import React from "react";

// 테이블 컴포넌트
class Table extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         testing: true,
    //     }
    // };

    tr(name, age) {
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                {/* <td>{this.state ? '참' : '거짓'}</td> */}
            </tr>
        )
    };

    render() {
        return (
            <table>
                <tbody>
                    {this.tr('jason', '24')}
                    {this.tr('elsa', '25')}
                    {this.tr('tom', '26')}
                    {this.tr('chulsoo', '27')}
                </tbody>
            </table>
        )
    }
};
export default Table;