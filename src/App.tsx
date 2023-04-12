import './App.css'
import { useState, useEffect } from 'react'
import React from 'react'

export default function App() {
  const [number, setNumber] = useState<string>('')
  const [numbers, setNumbers] = useState<string[]>([])
  useEffect(() => {
    calc()
  }, [numbers])
  const [display, setDisplay] = useState<string>('')
  const [result, setResult] = useState<number>(0)
  const [calculate, setCalculate] = useState<boolean>(false)

  const handleClickNumber = (value: string | number): void => {
    setDisplay(display + value)
    setNumber(number + value)
    setResult(0)
  }

  const handleClickAction = (value: string): void => {
    if (number != '') {
      setDisplay(display + value)
      setNumbers(numbers => [...numbers, number])
      setNumbers(numbers => [...numbers, value])
      setNumber('')
      setResult(0)
    }
  }

  const handleClickResult = (): void => {
    if (number != '') {
      setNumbers(numbers => [...numbers, number])
      setCalculate(true)
    }
  }

  const handleClear = (): void => {
    setCalculate(false)
    setDisplay('')
    setNumber('')
    setNumbers([])
    setResult(0)
  }

  const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val))
  }

  const calc = (): void => {
    if (calculate === true) {
      let numbersArr: string[] = numbers
      let res: number = parseFloat(numbersArr[0])
      let act: string = numbersArr[1]
      for (let i = 2; i < numbersArr.length; i++) {

        var val: string = numbersArr[i]

        if (isNumeric(val)) {
          if (act === '+')
            res = res + parseFloat(val)
          if (act === '-')
            res -= parseFloat(val)
          if (act === 'x')
            res *= parseFloat(val)
          if (act === '÷')
            res /= parseFloat(val)
        }

        else {
          act = val
        }
      }
      setResult(res)
      setCalculate(false)
      setNumber('0')
      setNumbers([])
      setNumbers(numbers => [...numbers, res.toString()])
    }

  }


  return (
    <div className='App'>
      <div className="calculator">
        <div className="input" id="input">{result === 0 ? display : result}</div>

        <div className="buttons">
          <div className="operators">
            <div className="operator" id="plus" onClick={() => handleClickAction('+')}>
              +
            </div>
            <div className="operator" id="minus" onClick={() => handleClickAction('-')}>
              -
            </div>
            <div className="operator" id="multiplication" onClick={() => handleClickAction('x')}>
              ×
            </div>
            <div className="operator" id="divide" onClick={() => handleClickAction('÷')}>÷</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div className="number" onClick={() => handleClickNumber(7)}>7</div>
              <div className="number" onClick={() => handleClickNumber(8)}>8</div>
              <div className="number" onClick={() => handleClickNumber(9)}>9</div>
            </div>
            <div className="numbers" >
              <div className="number" onClick={() => handleClickNumber(4)}>4</div>
              <div className="number" onClick={() => handleClickNumber(5)}>5</div>
              <div className="number" onClick={() => handleClickNumber(6)}>6</div>
            </div>
            <div className="numbers" >
              <div className="number" onClick={() => handleClickNumber(1)}>1</div>
              <div className="number" onClick={() => handleClickNumber(2)}>2</div>
              <div className="number" onClick={() => handleClickNumber(3)}>3</div>
            </div>
            <div className="numbers">
              <div className="number" onClick={() => handleClickNumber(0)}>0</div>
              <div className="number" onClick={() => handleClickNumber('.')}>.</div>
              <div id="clear" onClick={() => handleClear()}>C</div>
            </div>
          </div>
          <div className="equal" id="result" onClick={() => handleClickResult()}>
            =
          </div>
        </div>
      </div>
    </div>
  )
}
