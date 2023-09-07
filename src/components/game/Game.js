import React from "react";
import './GameStyle.css'
import logo from "../../assets/pictures/crosswordFull.svg.png";

import { GRID_DATA } from "./consts";
import { Button } from "bootstrap";

const CLUE_DATA = {
  'Ac1': {
    clue: 'אחרי המשחק יש שידור חוזר של אלוף פיקוד דרום בדימוס (3, 4)',
    answer: 'גורודיש',
    direction: 'across',
    number: 1,
    boxes: ['A12', 'A11', 'A10', 'A9', 'A8', 'A7', 'A6']
  },
  'Ac4': {
    clue: 'תשבעי ממערב או ממזרח אלינו? (4)',
    answer: 'ירדנ',
    direction: 'across',
    number: 4,
    boxes: ['A4', 'A3', 'A2', 'A1']
  },
  'Ac7': {
    clue: 'מקצועו של אגרנט היה פשוט טרוף! (4)',
    answer: 'שופט',
    direction: 'across',
    number: 7,
    boxes: ['C12', 'C11', 'C10', 'C9']
  },
  'Ac8': {
    clue: 'מה עשו אולי העובדים בחנות התרמילים לידיד משכבר הימים? (3, 4)',
    answer: 'מכרותיק',
    direction: 'across',
    number: 8,
    boxes: ['C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1']
  },
  'Ac10': {
    clue: 'דוד אלעזר, למשל, נלחם בנוגע למנת קרב (2, 4)',
    answer: 'רבאלופ',
    direction: 'across',
    number: 10,
    boxes: ['E12', 'E11', 'E10', 'E9', 'E8', 'E7']
  },
  'Ac12': {
    clue: 'מכנים אותו "המלאך" וראמ"ן נטרף! (5)',
    answer: 'מרואנ',
    direction: 'across',
    number: 12,
    boxes: ['F5', 'F4', 'F3', 'F2', 'F1']
  },
  'Ac13': {
    clue: 'בבית החולים ליולדות יש כוח שצריך להביא לצבא (5)',
    answer: 'לגייס',
    direction: 'across',
    number: 12,
    boxes: ['G12', 'G11', 'G10', 'G9', 'G8']
  },
  'Ac15': {
    clue: 'באיראן החרימו את הכוחות המיוחדים (6)',
    answer: 'קומנדו',
    direction: 'across',
    number: 15,
    boxes: ['H6', 'H5', 'H4', 'H3', 'H2', 'H1']
  },
  'Ac18': {
    clue: 'ראש המוסד נולד בארץ והוגה לי רעיונות בפנים (3, 4)',
    answer: 'צביזמיר',
    direction: 'across',
    number: 18,
    boxes: ['J12', 'J11', 'J10', 'J9', 'J8', 'J7', 'J6']
  },
  'Ac19': {
    clue: 'תעלה אחרי עשר, הוא ממהר! (4)',
    answer: 'סואצ',
    direction: 'across',
    number: 19,
    boxes: ['J4', 'J3', 'J2', 'J1']
  },
  'Ac20': {
    clue: 'כשהוא מגיע מוקף בשיירת אוניות זה קשור אולי לצה"ל (4)',
    answer: 'צבאי',
    direction: 'across',
    number: 20,
    boxes: ['L12', 'L11', 'L10', 'L9']
  },
  'Ac21': {
    clue: 'שר הביטחון באיראן יכול לשכר אותך (3, 4)',
    answer: 'משהדיינ',
    direction: 'across',
    number: 21,
    boxes: ['L7', 'L6', 'L5', 'L4', 'L3', 'L2', 'L1']
  },
  'Dn1': {
    clue: 'כשנוכרי מקיף נוצרי זה יכול לפתור סכסוך (5)',
    answer: 'גישור',
    direction: 'down',
    number: 1,
    boxes: ['A12', 'B12', 'C12', 'D12', 'E12']
  },
  'Dn2': {
    clue: 'בזנב האווירון יש כלי נשק שסתום (5)',
    answer: 'ונטיל',
    direction: 'down',
    number: 2,
    boxes: ['A9', 'B9', 'C9', 'D9', 'E9']
  },
  'Dn3': {
    clue: 'הוא יגדל ויתפתח ואני הבנתי והכנסתי לראש בלי ראש על הראש (5)',
    answer: 'יתמנפ',
    direction: 'down',
    number: 3,
    boxes: ['A7', 'B7', 'C7', 'D7', 'E7']
  },
  'Dn5': {
    clue: 'מותר להגן על המקום שהסורים ניסו לכבוש (3, 5)',
    answer: 'רמתהגולנ',
    direction: 'down',
    number: 5,
    boxes: ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3']
  },
  'Dn6': {
    clue: 'מי ששולח לישראל רכבת אווירית מבריח רוצח מלמטה (6)',
    answer: 'ניקסונ',
    direction: 'down',
    number: 6,
    boxes: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1']
  },
  'Dn9': {
    clue: 'הוא נראה בלי זנבו כשנישא מסביב וזה היה התפקיד של גולדה [ראשי תיבות] (4)',
    answer: 'רוהמ',
    direction: 'down',
    number: 9,
    boxes: ['C5', 'D5', 'E5', 'F5']
  },
  'Dn11': {
    clue: 'ראש אמ"ן לשעבר מכניס חצי ליטר קטן באלפים (3, 5)',
    answer: 'אליזעירא',
    direction: 'down',
    number: 11,
    boxes: ['E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'K10', 'L10']
  },
  'Dn13': {
    clue: 'הצי צלף כשהתבקש להפגיז (6)',
    answer: 'להפציצ',
    direction: 'down',
    number: 13,
    boxes: ['G12', 'H12', 'I12', 'J12', 'K12', 'L12']
  },
  'Dn14': {
    clue: 'חוסיין - יש לו מכשיר עינויים לפני (4)',
    answer: 'סדאמ',
    direction: 'down',
    number: 14,
    boxes: ['G8', 'H8', 'I8', 'J8']
  },
  'Dn15': {
    clue: 'לב מצרי במבצע שאפשר לראות בשדה! (5)',
    answer: 'קצרדש',
    direction: 'down',
    number: 15,
    boxes: ['H6', 'I6', 'J6', 'K6', 'L6']
  },
  'Dn16': {
    clue: 'קצין אפס מעל המצבה נוחל כישלון (5)',
    answer: 'מפסיד',
    direction: 'down',
    number: 16,
    boxes: ['H4', 'I4', 'J4', 'K4', 'L4']
  },
  'Dn17': {
    clue: 'היה נשיא מצויין! (5)',
    answer: 'ויצמנ',
    direction: 'down',
    number: 17,
    boxes: ['H1', 'I1', 'J1', 'K1', 'L1']
  },

};


let arrayRight = [];
let arrayFalse = [];

class Crossword extends React.Component {
  constructor(props) {
    super(props);
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    
    this.state = {
      grid: GRID_DATA,
      clues: CLUE_DATA,
      activeClueBoxes: CLUE_DATA['Ac1'].boxes,
      activeClue: ['Ac1'],
      boxInFocus: CLUE_DATA['Ac1'].boxes[0],
      showData: false,
      showAnswer: false,
      showError: false
    };

    this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
    this.setActiveClue = this.setActiveClue.bind(this);
    this.setBoxInFocus = this.setBoxInFocus.bind(this);
    this.setShowData = this.setShowData.bind(this);
    this.setShowError = this.setShowError.bind(this);
  }

  setActiveClueBoxes(boxes) {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    // boxes.map((box) => {console.log(document.getElementById(`input${box}`))})
    this.setState({
      activeClueBoxes: boxes
    });
  }
  setShowData() {
    this.setState({
      showData: true
    });
  }
  setShowAnswer() {
    this.setState({
      showAnswer: true
    });
  }
  setShowError() {
    console.log('handleCheckAnswers called');
    this.setState({
      showError: true
    });
  }

  setActiveClue(clue) {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    this.setState({
      activeClue: clue
    });
  }

  setBoxInFocus(box) {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    this.setState({
      boxInFocus: box
    });
  }

  handleCheckAnswers() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
      GRID_DATA.map((box, index) => {
        const data = document.getElementById(`input${box.id}`)
        if (data) {
          if (GRID_DATA[index].label) {
            const cluesIndex = GRID_DATA[index].clues;
            if (cluesIndex) {
              cluesIndex.map((clueIndex) => {
                const clue = CLUE_DATA[clueIndex];
                if (clue) {
                  const boxes = clue.boxes;
                  if (boxes) {
                    let inputWord = '';
                    boxes.map((cell) => {
                      inputWord += document.getElementById(`input${cell}`).value;
                    })
                    if (inputWord === clue.answer) {
                      boxes.map((cell) => {
                        const inputCell = document.getElementById(`input${cell}`)
                        inputCell.classList.remove("highlight");
                        inputCell.classList.add("right");
                        arrayRight.push(cell)
                      })
                    } else {
                      boxes.map((cell) => {
                        const inputCell = document.getElementById(`input${cell}`)
                        inputCell.classList.remove("highlight");
                        inputCell.classList.add("false");
                        arrayFalse.push(cell)
                       
                      })
                    }
                  }
                }
              })
            }

          }
        }
      })
  }

  render() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    return (
      <div className="crossword">
        <Board grid={this.state.grid} allClues={this.state.clues} clues={this.state.clues} highlightedBoxes={this.state.activeClueBoxes} setActiveClueBoxes={this.setActiveClueBoxes}  setActiveClue={this.setActiveClue} setBoxInFocus={this.setBoxInFocus} boxInFocus={this.state.boxInFocus} /> 
        {this.state.showData && <img className="crossword-img" src={logo} />}
        {!this.state.showData ? <Clues clues={this.state.clues} setActiveClueBoxes={this.setActiveClueBoxes} activeClue={this.state.activeClue} setActiveClue={this.setActiveClue} setBoxInFocus={this.setBoxInFocus} /> : ""}
        <div onClick={this.handleCheckAnswers} className="buttonCheck">בדיקה</div>
        <div onClick={this.setShowData} className="buttonCheck">חשיפת התשובות</div>
        {this.state.showError ? <div>***מלאו את כל הטבלה</div> : null }
        {/* <div className="text">לחצו על המשבצות והתחילו בתשבץ</div> */}
      </div>
    );
  }
}

class Clues extends React.Component {
  constructor(props) {
    super(props);
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    const cluesAcross = [];
    const cluesDown = [];

    for (const key in this.props.clues) {
      const clue = this.props.clues[key];
      clue.id = key;
      if (clue.direction === 'across') {
        cluesAcross.push(clue);
      }
      else {
        cluesDown.push(clue);
      }
    }

    this.state = {
      across: cluesAcross,
      down: cluesDown
    };
  }

  render() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    return (
      <div className="clue-lists text">
        <div className="clue-list-wrapper">
          <ol className="clue-list">
            {this.state.across.map((clueData) => <Clue key={clueData.id} clueID={clueData.id} clueText={clueData.clue} clueNumber={clueData.number} clueBoxes={clueData.boxes} setActiveClueBoxes={this.props.setActiveClueBoxes} setActiveClue={this.props.setActiveClue} isActive={this.props.activeClue.indexOf(clueData.id) > -1} setBoxInFocus={this.props.setBoxInFocus} />)}
          </ol>
        </div>
        <div className="clue-list-wrapper">
          <ol className="clue-list">
            {this.state.down.map((clueData) => <Clue key={clueData.id} clueID={clueData.id} clueText={clueData.clue} clueNumber={clueData.number} clueBoxes={clueData.boxes} setActiveClueBoxes={this.props.setActiveClueBoxes} setActiveClue={this.props.setActiveClue} isActive={this.props.activeClue.indexOf(clueData.id) > -1} setBoxInFocus={this.props.setBoxInFocus} />)
            }
          </ol>
        </div>
      </div>
    );
  }
}

class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.isActive
    };
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.isActive
    });
  }

  handleClick() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    const activeClue = [];
    activeClue.push(this.props.clueID);
    this.props.setActiveClueBoxes(this.props.clueBoxes);
    this.props.setActiveClue(activeClue);
    this.props.setBoxInFocus(this.props.clueBoxes[0]);
  }

  render() {
    return (
      <li className={`clue ${this.state.active ? 'active' : ''}`} style={{ display: !this.state.active && 'none' }}>

        <span className="clue-text">{this.props.clueText}</span>
      </li>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    return (
      <div className="crossword-board">

        {this.props.grid.map((box) => {
          const { id, letter, clues, label, clueDirection } = box;
          return <Box key={id} id={id} letter={letter} clueDirection={clueDirection} boxClues={clues} label={label} allClues={this.props.allClues} isHighlighted={this.props.highlightedBoxes.indexOf(id) > -1} setActiveClueBoxes={this.props.setActiveClueBoxes} setActiveClue={this.props.setActiveClue} setBoxInFocus={this.props.setBoxInFocus} isInFocus={this.props.boxInFocus == id} />
        })
        }
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    this.state = {
      highlight: props.isHighlighted,
      isInFocus: props.isInFocus,
    };

    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      highlight: newProps.isHighlighted,
      isInFocus: newProps.isInFocus
    });
  }

  componentDidUpdate() {
    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }
    if (this.state.isInFocus) {
      this.textInput.focus();
    }
  }



  handleFocus(event) {
    this.props.setActiveClue(this.props.boxClues);
    const dir = this.props.clueDirection
    let boxesToHighlight = [];
    if (dir === 'A' || dir === 'D') {
      sessionStorage.setItem("dir", dir)
      boxesToHighlight = boxesToHighlight.concat(this.props.allClues[this.props.boxClues[0]].boxes);
    }
    // for (const clue of this.props.boxClues) {
    //   console.log(clue)
    //   boxesToHighlight = boxesToHighlight.concat(this.props.allClues[clue].boxes);
    // }

    this.props.setActiveClueBoxes(boxesToHighlight);
    this.props.setBoxInFocus(event.target.id);
  }

  render() {
    let visibleLabel;
    let input;

    if(arrayFalse) {
      arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
    } 
    if(arrayRight) {
      arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
    }



    if (this.props.label) {
      visibleLabel = <span className="box-label">{this.props.label}</span>
    }

    function getNextChar(char, isNext) {
      if(arrayFalse) {
        arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
      } 
      if(arrayRight) {
        arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
      }
      return isNext
      ? String.fromCharCode(char.charCodeAt(0) + 1)
      : String.fromCharCode(char.charCodeAt(0) - 1);
    }

    function handleMovement(props, e) {
      const clue = props.boxClues[0];
      const movementRange = CLUE_DATA[clue].boxes;
      let indexCell = Number(movementRange.indexOf(props.id));
      // console.log(`input${movementRange[indexCell+1]}`)
      document.getElementById(`input${movementRange[indexCell+1]}`).focus()
      // document.getElementById(movementRange[indexCell+1]).focus()
     
      // movementRange.map((cell, index) => {
      //   if (cell === props.id) {
      //      indexCell = index;
      //   }
      // })
      // movementRange.map((cell, index) => {
      //   if (cell === props.id) {
      //     return index;
      //   }
      // })
      // console.log(movementRange[indexCell]) //התא שממנו זזים
      // if (e.target.value) {
      //   if (props.id[1] === "1" && !props.id[2]) {
      //     try {
      //       document
      //         .getElementById(`input${getNextChar(props.id[0], true)}1`)
      //         .focus();
      //     } catch {
      //       return;
      //     }
      //   } else if (
      //     !sessionStorage.getItem("prev2") ||
      //     sessionStorage.getItem("prev")[0] === sessionStorage.getItem("prev2")[0]
      //   ) {
      //     try {
      //       const number = props.id[2]
      //         ? Number(props.id[1] * 10) + Number(props.id[2])
      //         : Number(props.id[1]);
      //       document.getElementById(`input${props.id[0]}${number - 1}`).focus();
      //     } catch {
      //       try {
      //         document
      //           .getElementById(
      //             `input${getNextChar(props.id[0], true)}${props.id[1]}${props.id[2] ? props.id[2] : ""
      //             }`
      //           )
      //           .focus();
      //       } catch {
      //         return;
      //       }
      //     }
      //   } else {
      //     try {
      //       document
      //         .getElementById(
      //           `input${getNextChar(props.id[0], true)}${props.id[1]}${props.id[2] ? props.id[2] : ""
      //           }`
      //         )
      //         .focus();
      //     } catch {
      //       try {
      //         const number = props.id[2]
      //           ? Number(props.id[1] * 10) + Number(props.id[2])
      //           : Number(props.id[1]);
      //         document
      //           .getElementById(`input${props.id[0]}${number - 1}`)
      //           .focus();
      //       } catch {
      //         return;
      //       }
      //     }
      //   }
      // } else if (e.type !== "change" || e.nativeEvent.data) {
      //   if (props.id[1] === "1" && props.id[2] === "2") {
      //     try {
      //       document
      //         .getElementById(`input${getNextChar(props.id[0])}12`)
      //         .focus();
      //     } catch {
      //       return;
      //     }
      //   } else if (
      //     !sessionStorage.getItem("prev2") ||
      //     sessionStorage.getItem("prev")[0] === sessionStorage.getItem("prev2")[0]
      //   ) {
      //     try {
      //       const number = props.id[2]
      //         ? Number(props.id[1] * 10) + Number(props.id[2])
      //         : Number(props.id[1]);
      //       document.getElementById(`input${props.id[0]}${number + 1}`).focus();
      //     } catch {
      //       try {
      //         document
      //           .getElementById(
      //             `input${getNextChar(props.id[0])}${props.id[1]}${props.id[2] ? props.id[2] : ""
      //             }`
      //           )
      //           .focus();
      //       } catch {
      //         return;
      //       }
      //     }
      //   } else {
      //     try {
      //       document
      //         .getElementById(
      //           `input${getNextChar(props.id[0])}${props.id[1]}${props.id[2] ? props.id[2] : ""
      //           }`
      //         )
      //         .focus();
      //     } catch {
      //       try {
      //         const number = props.id[2]
      //           ? Number(props.id[1] * 10) + Number(props.id[2])
      //           : Number(props.id[1]);
      //         document
      //           .getElementById(`input${props.id[0]}${number + 1}`)
      //           .focus();
      //       } catch {
      //         return;
      //       }
      //     }
      //   }
      // }
      // if (
      //   sessionStorage.getItem("prev") &&
      //   document.getElementById(`input${props.id}`)
      // ) {
      //   sessionStorage.setItem("prev2", sessionStorage.getItem("prev"));
      //   sessionStorage.setItem("prev", props.id);
      // } else {
      //   sessionStorage.setItem("prev", props.id);
      // }
    }

    if (this.props.letter) {
      input = <input onClick={() => {if(arrayFalse) {
        arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
      } 
      if(arrayRight) {
        arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
      }}} id={`input${this.props.id}`} style={{ direction: 'rtl', textAlign: 'center' }} type="text" maxLength="1" className={`box-input ${this.state.highlight ? 'highlight' : ''}`} onFocus={this.handleFocus} ref={(input) => { this.textInput = input }} onChange={(e) => { handleMovement(this.props, e) }} onKeyDown={(e) => {if(arrayFalse) {
        arrayFalse.map((cell)=> document.getElementById(`input${cell}`).classList.add("false"))
      } 
      if(arrayRight) {
        arrayRight.map((cell)=> document.getElementById(`input${cell}`).classList.add("right"))
      } if (e.keyCode === 8 && !e.target.value) { handleMovement(this.props, e) } }} />
    }

    return (
      <div>
        <div className={`box ${!this.props.letter ? ' blank' : ''}`}>
          {visibleLabel}
          {input}
        </div>
        {/* {activeClue && <h1>{activeClue}</h1>} */}
      </div>
    );
  }
}

export default Crossword;