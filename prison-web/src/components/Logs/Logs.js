import React, { Component } from 'react';
import GetLogs from "./../../fetchData/Logs/GetLogs"
import "./Logs.css"

class Logs extends Component {
    state = {
        logs: [],
        firstLog: 0,
        lastLog: 20
    }
    componentDidMount = () => {
        GetLogs(this.setLogs)
    }
    setLogs = (logs) => {
        this.setState({
            logs
        })
    }
    handleNextButton = () => {
        this.setState(prevState => {
            return {
                firstLog: prevState.firstLog + 20,
                lastLog: prevState.lastLog + 20,
            }
        })
    }
    handlePrevButton = () => {
        this.setState(prevState => {
            return {
                firstLog: prevState.firstLog - 20,
                lastLog: prevState.lastLog - 20,
            }
        })
    }
    render() {
        const { logs, firstLog, lastLog } = this.state
        return (<div className="prisoner-main">
            <div className="prisonerBox">
                <table>
                    <tbody>
                        <tr key="header" className="headerTable">
                            <td>Miejsce:</td>
                            <td>Rodzaj akcji:</td>
                            <td>Czas:</td>
                        </tr>
                        {logs.reverse().slice(firstLog, lastLog).map((logger) => (
                            <tr key={logger.id}>
                                <td>{logger.controller}</td>
                                <td>{logger.action}</td>
                                <td>{(new Date(logger.logData)).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="log-buttons">
                {firstLog === 0 ? null : <button className="add" onClick={this.handlePrevButton}>Poprzednie</button>}
                <button className="add" onClick={this.handleNextButton}>Następne</button>
            </div>
        </div>
        );
    }
}

export default Logs;