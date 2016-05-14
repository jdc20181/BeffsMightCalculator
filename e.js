function Calculate() {
  myForm = document.forms[0]
  var T1 =  4
  var T2 = 16
  var T3 = 24
  var T4 = 72
  var T5 = 144
  var T6 = 100 
  var T7 = 10
  var T8 = 6
  var W1 = 18
  var W2 = 24
  var W3 = 30
  if (myForm.elements["T1_Mnt"].value == "") myForm.elements["T1_Mnt"].value = "0"
  if (myForm.elements["T1_Ft" ].value == "") myForm.elements["T1_Ft" ].value = "0"
  if (myForm.elements["T1_Rng"].value == "") myForm.elements["T1_Rng"].value = "0"
  if (myForm.elements["T2_Mnt"].value == "") myForm.elements["T2_Mnt"].value = "0"
  if (myForm.elements["T2_Ft" ].value == "") myForm.elements["T2_Ft" ].value = "0"
  if (myForm.elements["T2_Rng"].value == "") myForm.elements["T2_Rng"].value = "0"
  if (myForm.elements["T3_Mnt"].value == "") myForm.elements["T3_Mnt"].value = "0"
  if (myForm.elements["T3_Ft" ].value == "") myForm.elements["T3_Ft" ].value = "0"
  if (myForm.elements["T3_Rng"].value == "") myForm.elements["T3_Rng"].value = "0"
  if (myForm.elements["T4_Mnt"].value == "") myForm.elements["T4_Mnt"].value = "0"
  if (myForm.elements["T4_Ft" ].value == "") myForm.elements["T4_Ft" ].value = "0"
  if (myForm.elements["T4_Rng"].value == "") myForm.elements["T4_Rng"].value = "0"
  if (myForm.elements["T5_Mnt"].value == "") myForm.elements["T5_Mnt"].value = "0"
  if (myForm.elements["T5_Ft" ].value == "") myForm.elements["T5_Ft" ].value = "0"
  if (myForm.elements["T5_Rng"].value == "") myForm.elements["T5_Rng"].value = "0"
  if (myForm.elements["T6_Mnt"].value == "") myForm.elements["T6_Mnt"].value = "0"
  if (myForm.elements["T6_Ft" ].value == "") myForm.elements["T6_Ft" ].value = "0"
  if (myForm.elements["T6_Rng"].value == "") myForm.elements["T6_Rng"].value = "0"
  if (myForm.elements["T6_Rng2"].value == "") myForm.elements["T6_Rng2"].value = "0"
  if (myForm.elements["T6_Rng3"].value == "") myForm.elements["T6_Rng3"].value = "0"
  if (myForm.elements["T7_Mnt"].value == "") myForm.elements["T7_Mnt"].value = "0"
  if (myForm.elements["T7_Ft" ].value == "") myForm.elements["T7_Ft" ].value = "0"
  if (myForm.elements["T8_Rng"].value == "") myForm.elements["T8_Rng"].value = "0"
  if (myForm.elements["W1_A"  ].value == "") myForm.elements["W1_A"  ].value = "0"
  if (myForm.elements["W1_B"  ].value == "") myForm.elements["W1_B"  ].value = "0"
  if (myForm.elements["W1_C"  ].value == "") myForm.elements["W1_C"  ].value = "0"
  if (myForm.elements["W2_A"  ].value == "") myForm.elements["W2_A"  ].value = "0"
  if (myForm.elements["W2_B"  ].value == "") myForm.elements["W2_B"  ].value = "0"
  if (myForm.elements["W2_C"  ].value == "") myForm.elements["W2_C"  ].value = "0"
  if (myForm.elements["W3_A"  ].value == "") myForm.elements["W3_A"  ].value = "0"
  if (myForm.elements["W3_B"  ].value == "") myForm.elements["W3_B"  ].value = "0"
  if (myForm.elements["W3_C"  ].value == "") myForm.elements["W3_C"  ].value = "0"
 
  myForm.elements["mT1_Mnt"].value = parseInt(myForm.elements["T1_Mnt"].value) * myform.elements["packs"].value* T1 
  myForm.elements["mT1_Ft" ].value = parseInt(myForm.elements["T1_Ft" ].value) * T1
  myForm.elements["mT1_Rng"].value = parseInt(myForm.elements["T1_Rng"].value) * T1
  myForm.elements["mT2_Mnt"].value = parseInt(myForm.elements["T2_Mnt"].value) * T2
  myForm.elements["mT2_Ft" ].value = parseInt(myForm.elements["T2_Ft" ].value) * T2
  myForm.elements["mT2_Rng"].value = parseInt(myForm.elements["T2_Rng"].value) * T2
  myForm.elements["mT3_Mnt"].value = parseInt(myForm.elements["T3_Mnt"].value) * T3
  myForm.elements["mT3_Ft" ].value = parseInt(myForm.elements["T3_Ft" ].value) * T3
  myForm.elements["mT3_Rng"].value = parseInt(myForm.elements["T3_Rng"].value) * T3
 
  myForm.elements["mT4_Mnt"].value = parseInt(myForm.elements["T4_Mnt"].value) * T4
  myForm.elements["mT4_Ft" ].value = parseInt(myForm.elements["T4_Ft" ].value) * T4
  myForm.elements["mT4_Rng"].value = parseInt(myForm.elements["T4_Rng"].value) * T4
  myForm.elements["mT5_Mnt"].value = parseInt(myForm.elements["T5_Mnt"].value) * T5
  myForm.elements["mT5_Ft" ].value = parseInt(myForm.elements["T5_Ft" ].value) * T5
  myForm.elements["mT5_Rng"].value = parseInt(myForm.elements["T5_Rng"].value) * T5
  myForm.elements["mT6_Mnt"].value = parseInt(myForm.elements["T6_Mnt"].value) * T6
  myForm.elements["mT6_Ft" ].value = parseInt(myForm.elements["T6_Ft" ].value) * T6
  myForm.elements["mT6_Rng"].value = parseInt(myForm.elements["T6_Rng"].value) * T6
  myForm.elements["mT6_Rng2"].value = parseInt(myForm.elements["T6_Rng2"].value) * T6
  myForm.elements["mT6_Rng3"].value = parseInt(myForm.elements["T6_Rng3"].value) * T6
  myForm.elements["mT7_Mnt"].value = parseInt(myForm.elements["T7_Mnt"].value) * T7
  myForm.elements["mT7_Ft" ].value = parseInt(myForm.elements["T7_Ft" ].value) * T7
  myForm.elements["mT8_Rng"].value = parseInt(myForm.elements["T8_Rng"].value) * T8
  Troop_Might =               parseInt(myForm.elements["mT1_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT1_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT1_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT2_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT2_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT2_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT3_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT3_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT3_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT4_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT4_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT4_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT5_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT5_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT5_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT6_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT6_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT6_Rng"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT6_Rng2"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT6_Rng3"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT7_Mnt"].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT7_Ft" ].value)
  Troop_Might = Troop_Might + parseInt(myForm.elements["mT8_Rng"].value)
  myForm.elements["Troop_Might"].value = Troop_Might 
  myForm.elements["mW1_A"  ].value = parseInt(myForm.elements["W1_A"  ].value) * W1
  myForm.elements["mW1_B"  ].value = parseInt(myForm.elements["W1_B"  ].value) * W1
  myForm.elements["mW1_C"  ].value = parseInt(myForm.elements["W1_C"  ].value) * W1
  myForm.elements["mW2_A"  ].value = parseInt(myForm.elements["W2_A"  ].value) * W2
  myForm.elements["mW2_B"  ].value = parseInt(myForm.elements["W2_B"  ].value) * W2
  myForm.elements["mW2_C"  ].value = parseInt(myForm.elements["W2_C"  ].value) * W2
  myForm.elements["mW3_A"  ].value = parseInt(myForm.elements["W3_A"  ].value) * W3
  myForm.elements["mW3_B"  ].value = parseInt(myForm.elements["W3_B"  ].value) * W3
  myForm.elements["mW3_C"  ].value = parseInt(myForm.elements["W3_C"  ].value) * W3
  Wall_Might  =               parseInt(myForm.elements["mW1_A"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW1_B"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW1_C"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW2_A"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW2_B"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW2_C"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW3_A"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW3_B"  ].value)
  Wall_Might  = Wall_Might  + parseInt(myForm.elements["mW3_C"  ].value)
 
  myForm.elements["Wall_Might"].value = Wall_Might 
  myForm.elements["Total_Might"].value = Troop_Might + Wall_Might 
  return false
}
