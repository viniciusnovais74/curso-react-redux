import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    const aleartorio = parseInt(Math.random() * (max - min))+min
    return (
        <Card title='Sorteio de um Numero' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleartorio}</strong>
                </span>
            </div>
        </Card>
    )
}