# Tests

## beepBoop()

`Test:Number contains "0" it should return "0"`
`code:beepBoop(0)`
`Expected Output:0`

`Test:Number contains "1" it should return "Beep!"`
`code:beepBoop(1)`
`Expected Output:"Beep!"`

`Test:Number contains "2" it should return "Boop!"`
`code:beepBoop(2)`
`Expected Output:"Boop!"`

`Test:Number contains "3" it should return "Won't you be my`
      `neighbor?"`         
`code:beepBoop(3)`
`Expected Output:"Won't you be my neighbor?"`

`Test:Number contains "4" it should return "0,Beep,Boop,`
      `Won't you be my neighbor?,4"`         
`code:beepBoop(4)`
`Expected Output:"0,Beep,Boop,Won't you be my neighbor?,4"`

`Test:Number contains "13" it should return "Won't you be` 
      `my neighbor?"`        
`code:beepBoop(13)`
`Expected Output:"Won't you be my neighbor?"`

`Test:Number contains "21" it should return "Boop"`        
`code:beepBoop(21)`
`Expected Output:"Boop"`

`Test:Number contains "32" it should return "Won't you be`
       `my neighbor"`        
`code:beepBoop(32)`
`Expected Output:"Won't you be my neighbor"`