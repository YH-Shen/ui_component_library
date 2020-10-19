import React, { Fragment } from "react";

// interface TableValue {
//     [Key: string]: any;
// }

interface Props {
    // value: TableValue;
    head: Array<string>;
    fields: Array<{ name: string; label: string; input: { type: string } }>;
}

const Table: React.FunctionComponent<Props> = (props) => {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>{/* {head} */}</tr>
                </thead>
                <tbody>{/* {data} */}</tbody>
            </table>
        </Fragment>
    );
};

export default Table;
