import "./directory.css"

function Directory() {
    return (
        <nav className="shell">
            <ul className="buttons">
                <li className="li">
                    management
                    <ul>
                        <li>Sold baby</li>
                        <li>Evaluation</li>
                        <li>Shopkeeper</li>
                        <li>Management</li>
                    </ul>
                </li>

                <li className="li">
                    logisitcs
                    <ul>
                        <li>Warehouse</li>
                        <li>deliver goods</li>
                        <li>stock</li>
                        <li>mail</li>
                        <li>return goods</li>
                    </ul>
                </li>

                <li className="li">
                    treasure
                    <ul>
                        <li>Release baby</li>
                        <li>Posting Details</li>
                        <li>Shop decoration</li>
                    </ul>
                </li>

                <li className="li">
                    financial service
                    <ul>
                        <li>payment</li>
                        <li>Loan goods</li>
                        <li>Collection in advance</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Directory;