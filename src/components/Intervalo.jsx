import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumberMin, alterarNumberMax } from '../store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props

    return (
        <Card title='Intervalo de Numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e=> props.alterMax(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterMin(newNumber) {
            const action = alterarNumberMin(newNumber)
            dispatch(action)
        },
        alterMax(newNumber) {
            const action = alterarNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)