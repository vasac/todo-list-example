define({"oj-message":{fatal:"Lemtinga",error:"Klaida",warning:"Įspėjimas",info:"Informacija",confirmation:"Patvirtinimas","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Reikšmė yra nenumatyto formato.",detail:"Įveskite numatyto formato reikšmę.","plural-separator":", ",hint:{summary:"Pavyzdys: {exampleValue}",detail:"Įveskite reikšmę šiuo formatu: {exampleValue}.","detail-plural":"Įveskite reikšmę šiais formatais: {exampleValue}."},optionHint:{detail:"Parinkties '{propertyName}' tinkama reikšmė yra '{propertyValueValid}'.","detail-plural":"Parinkties '{propertyName}' tinkamos reikšmės yra '{propertyValueValid}'."},optionTypesMismatch:{summary:"Parinkties '{requiredPropertyName}' reikšmė yra būtina, kai parinkties '{propertyName}' reikšmė yra '{propertyValue}'."},optionTypeInvalid:{summary:"Parinkčiai '{propertyName}' nepateikta numatyto tipo reikšmė."},optionOutOfRange:{summary:"Parinkties '{propertyName}' reikšmė {propertyValue} yra už intervalo ribų."},optionValueInvalid:{summary:"Nurodyta neleistina parinkties '{propertyName}' reikšmė '{propertyValue}'."},number:{decimalFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto skaičiaus formato."},shortLongUnsupportedParse:{summary:"Keitiklio analizės reikšmės 'short' ir 'long' nepalaikomos.",detail:"Pakeiskite komponentą į tik skaitomą. Tik skaitomi laukai neiškviečia keitiklio analizės funkcijos."},currencyFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto valiutos formato."},percentFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto procentų formato."},invalidNumberFormat:{summary:"Pateikta reikšmė nėra galiojantis skaičius.",detail:"Nurodykite tinkamą skaičių."}},color:{invalidFormat:{summary:"Neleistinas spalvos formatas.",detail:"Neleistino spalvos formato parinkties specifikacija."},invalidSyntax:{summary:"Neleistina spalvos specifikacija.",detail:"Įveskite spalvos reikšmę, atitinkančią CSS3 standartą."}},datetime:{datetimeOutOfRange:{summary:"'{propertyName}' reikšmė '{value}' yra už intervalo ribų.",detail:"Įveskite reikšmę nuo '{minValue}' iki '{maxValue}'.",hour:"val.",minute:"min.",second:"sek.",millisec:"milisek.",month:"mėnuo",day:"diena",year:"metai","month name":"mėnesio pavadinimas",weekday:"savaitės diena"},dateFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto datos formato."},invalidTimeZoneID:{summary:"Nurodytas neleistinas laiko juostos ID {timeZoneID}."},nonExistingTime:{summary:"Įvesties laiko nėra, nes jis patenka į perėjimo prie vasaros laiko intervalą."},missingTimeZoneData:{summary:"Nėra Laiko juostos duomenų. Iškvieskite 'ojs/ojtimezonedata', kad būtų įkelti Laiko juostos duomenys."},timeFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto laiko formato."},datetimeFormatMismatch:{summary:"Pateikta reikšmė nėra numatyto datos ir laiko formato."},dateToWeekdayMismatch:{summary:"Diena '{date}' nepatenka į '{weekday}' intervalą.",detail:"Įveskite savaitės dieną, kuri atitinka datą."},invalidISOString:{invalidRangeSummary:"Reikšmė '{value}' nepatenka į '{propertyName}' lauke nurodytą intervalą ISO 8601 eilutėje '{isoStr}'.",summary:"Nurodyta '{isoStr}' nėra leistina ISO 8601 eilutė.",detail:"Nurodykite leistiną ISO 8601 eilutę."}}},"oj-validator":{length:{hint:{min:"Įveskite {min} arba daugiau simbolių.",max:"Įveskite {max} arba mažiau simbolių.",inRange:"Įveskite simbolių: nuo {min} iki {max}.",exact:"Įveskite {length} simbol."},messageDetail:{tooShort:"Įveskite {min} arba daugiau simbolių.",tooLong:"Įveskite ne daugiau nei tiek simbolių: {max}."},messageSummary:{tooShort:"Per mažai simbolių.",tooLong:"Per daug simbolių."}},range:{number:{hint:{min:"Įveskite skaičių, didesnį arba lygų {min}.",max:"Įveskite skaičių, mažesnį arba lygų {max}.",inRange:"Įveskite skaičių nuo {min} iki {max}.",exact:"Įveskite skaičių {num}."},messageDetail:{rangeUnderflow:"Įveskite {min} arba didesnį skaičių.",rangeOverflow:"Įveskite {max} arba mažesnį skaičių.",exact:"Įveskite skaičių {num}."},messageSummary:{rangeUnderflow:"Skaičius per mažas.",rangeOverflow:"Skaičius per didelis."}},datetime:{hint:{min:"Įveskite datą ir laiką, kurie sutaptų su {min} arba būtų vėlesni.",max:"Įveskite datą ir laiką, kurie sutaptų su {max} arba būtų ankstesni.",inRange:"Įveskite datą ir laiką nuo {min} iki {max}."},messageDetail:{rangeUnderflow:"Įveskite datą {min} arba vėlesnę.",rangeOverflow:"Įveskite datą {max} arba ankstesnę."},messageSummary:{rangeUnderflow:"Data ir laikas yra ankstesni nei minimalūs data ir laikas.",rangeOverflow:"Data ir laikas yra vėlesni nei maksimalūs data ir laikas."}},date:{hint:{min:"Įveskite datą {min} arba vėlesnę.",max:"Įveskite datą {max} arba ankstesnę.",inRange:"Įveskite datą nuo {min} iki {max}."},messageDetail:{rangeUnderflow:"Įveskite datą {min} arba vėlesnę.",rangeOverflow:"Įveskite datą {max} arba ankstesnę."},messageSummary:{rangeUnderflow:"Data yra ankstesnė nei minimali data.",rangeOverflow:"Data yra vėlesnė nei maksimali data."}},time:{hint:{min:"Įveskite {min} arba vėlesnį laiką.",max:"Įveskite {max} arba ankstesnį laiką.",inRange:"Įveskite laiką tarp {min} ir {max}."},messageDetail:{rangeUnderflow:"Įveskite laiką {min} arba vėlėsnį.",rangeOverflow:"Įveskite laiką {max} arba ankstesnį."},messageSummary:{rangeUnderflow:"Laikas yra ankstesnis nei minimalus laikas.",rangeOverflow:"Laikas yra vėlesnis nei maksimalus laikas."}}},restriction:{date:{messageSummary:"Datos {value} yra išjungto įrašo.",messageDetail:"Jūsų pasirinkta data negalima. Išbandykite kitą datą."}},regExp:{summary:"Formatas yra neteisingas.",detail:"Įveskite leistinas reikšmes, aprašytas šioje įprastoje išraiškoje: {pattern}."},required:{summary:"Būtina nurodyti reikšmę.",detail:"Įveskite reikšmę."}},"oj-ojEditableValue":{loading:"Įkeliama",requiredText:"Būtina"},"oj-ojInputDate":{done:"Atlikta",cancel:"Atšaukti",prevText:"Ankstesnis",nextText:"Paskesnis",currentText:"Šiandien",weekHeader:"Sav.",tooltipCalendar:"Pasirinkti datą.",tooltipCalendarTime:"Pasirinkti datos laiką.",tooltipCalendarDisabled:"Datos pasirinkimas išjungtas.",tooltipCalendarTimeDisabled:"Datos laiko pasirinkimas išjungtas.",picker:"Parinkiklis",weekText:"Savaitė",datePicker:"Datos parinkiklis",inputHelp:"Paspauskite rodyklės žemyn klavišą arba rodyklės aukštyn klavišą, kad prieitumėte prie kalendoriaus.",inputHelpBoth:"Paspausite rodyklės žemyn arba rodyklės aukštyn klavišą, kad prieitumėte prie kalendoriaus, arba Shift + rodyklės žemyn klavišą arba Shift + rodyklės aukštyn klavišą, kad prieitumėte prie laiko išskleidžiamojo meniu.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Atšaukti",okText:"Gerai",currentTimeText:"Dabar",hourWheelLabel:"Val.",minuteWheelLabel:"Min.",ampmWheelLabel:"AM PM",tooltipTime:"Pasirinkti laiką.",tooltipTimeDisabled:"Laiko pasirinkimas išjungtas.",inputHelp:"Paspauskite rodyklės žemyn klavišą arba rodyklės aukštyn klavišą, kad prieitumėte prie laiko išskleidžiamojo meniu.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Reikšmė turi atitikti šį šabloną: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Rodomas {pageIndex} puslapis iš {pageCount}",labelAccArrowNextPage:"Pasirinkite Paskesnis, kad būtų rodomas kitas puslapis",labelAccArrowPreviousPage:"Pasirinkite Ankstesnis, kad būtų rodomas ankstesnis puslapis",tipArrowNextPage:"Paskesnis",tipArrowPreviousPage:"Ankstesnis"},"oj-ojDataGrid":{accessibleSortAscending:"{id} rikiuojamas didėjimo tvarka",accessibleSortDescending:"{id} rikiuojamas mažėjimo tvarka",accessibleActionableMode:"Paleiskite veiksmų režimą.",accessibleNavigationMode:"Paleiskite naršymo režimą, paspauskite F2, kad paleistumėte redagavimo arba veiksmų režimą.",accessibleEditableMode:"Įjunkite redagavimo režimą ir paspauskite Escape, kad išeitumėte už duomenų tinklelio ribų.",accessibleSummaryExact:"Tai duomenų tinklelis, kuriame yra {rownum} eultės (-čių) ir {colnum} stulpeliai (-ių)",accessibleSummaryEstimate:"Tai duomenų tinklelis, kuriame yra nežinomas eilučių ir stulpelių skaičius",accessibleSummaryExpanded:"Šiuo metu išskleistų eilučių skaičius: {num}",accessibleRowExpanded:"Eilutė išskleista",accessibleRowCollapsed:"Eilutė sutraukta",accessibleRowSelected:"Pasirinkita eilutė {row}",accessibleColumnSelected:"Pasirinktas stulpelis {column}",accessibleStateSelected:"pasirinkta",accessibleMultiCellSelected:"Pasirinkta langelių: {num}",accessibleColumnSpanContext:"{extent} pločio",accessibleRowSpanContext:"{extent} aukščio",accessibleRowContext:"Eilutė {index}",accessibleColumnContext:"Stulpelis {index}",accessibleRowHeaderContext:"Eilutės antraštė {index}",accessibleColumnHeaderContext:"Stulpelio antraštė {index}",accessibleRowEndHeaderContext:"Eilutės pabaigos antraštė {index}",accessibleColumnEndHeaderContext:"Stulpelio pabaigos antraštė {index}",accessibleRowHeaderLabelContext:"Eilutės antraštės žyma {level}",accessibleColumnHeaderLabelContext:"Stulpelio antraštės žyma {level}",accessibleRowEndHeaderLabelContext:"Eilutės pabaigos antraštės žyma {level}",accessibleColumnEndHeaderLabelContext:"Stulpelio pabaigos antraštės žyma {level}",accessibleLevelContext:"Lygis {level}",accessibleRangeSelectModeOn:"Pasirinkto langelių intervalo įtraukimo režimas įjungtas.",accessibleRangeSelectModeOff:"Pasirinkto langelių intervalo įtraukimo režimas išjungtas.",accessibleFirstRow:"Pasiekėte pirmą eilutę.",accessibleLastRow:"Pasiekėte paskutinę eilutę.",accessibleFirstColumn:"Pasiekėte pirmą stulpelį.",accessibleLastColumn:"Pasiekėte paskutinį stulpelį.",accessibleSelectionAffordanceTop:"Viršutinis pasirinkimo valdymo įrankis",accessibleSelectionAffordanceBottom:"Apatinis pasirinkimo valdymo įrankis",msgFetchingData:"Gaunami duomenys...",msgNoData:"Nėra rodytinų elementų.",labelResize:"Keisti dydį",labelResizeWidth:"Keisti plotį",labelResizeHeight:"Keisti aukštį",labelSortRow:"Rikiuoti eilutes",labelSortRowAsc:"Rikiuoti eilutes didėjimo tvarka",labelSortRowDsc:"Rikiuoti eilutes mažėjimo tvarka",labelSortCol:"Rikiuoti stulpelius",labelSortColAsc:"Rikiuoti stulpelius didėjimo tvarka",labelSortColDsc:"Rikiuoti stulpelius mažėjimo tvarka",labelCut:"Iškirpti",labelPaste:"Įklijuoti",labelEnableNonContiguous:"Įjungti nesiribojančių pasirinkimą",labelDisableNonContiguous:"Išjungti nesiribojančių pasirinkimą",labelResizeDialogSubmit:"Gerai",labelResizeDialogCancel:"Atšaukti"},"oj-ojRowExpander":{accessibleLevelDescription:"Lygis {level}",accessibleRowDescription:"Lygis {level}, eilutė {num} iš {total}",accessibleRowExpanded:"Eilutė išskleista",accessibleRowCollapsed:"Eilutė sutraukta",accessibleStateExpanded:"išskleista",accessibleStateCollapsed:"sutraukta"},"oj-ojListView":{msgFetchingData:"Gaunami duomenys...",msgNoData:"Nėra rodytinų elementų.",msgItemsAppended:"Prie pabaigos pridėta {count} elem.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Du kartus spustelėkite ir palaikykite. Palaukite, kol nuskambės garsas, tada pertvarkykite vilkdami.",accessibleReorderBeforeItem:"Prieš {item}",accessibleReorderAfterItem:"Po {item}",accessibleReorderInsideItem:"Kur {item}",accessibleNavigateSkipItems:"Praleidžiami elementai: {numSkip}",labelCut:"Iškirpti",labelCopy:"Kopijuoti",labelPaste:"Įklijuoti",labelPasteBefore:"Įklijuoti prieš",labelPasteAfter:"Įklijuoti po"},"oj-_ojLabel":{tooltipHelp:"Žinynas",tooltipRequired:"Būtina"},"oj-ojLabel":{tooltipHelp:"Žinynas",tooltipRequired:"Būtina"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Mažinimas",tooltipIncrement:"Didinimas"},"oj-ojTable":{accessibleColumnContext:"Stulpelis {index}",accessibleColumnHeaderContext:"Stulpelio antraštė {index}",accessibleRowContext:"Eilutė {index}",accessibleSortAscending:"{id} rikiuojamas didėjimo tvarka",accessibleSortDescending:"{id} rikiuojamas mažėjimo tvarka",accessibleStateSelected:"pasirinkta",labelAccSelectionAffordanceTop:"Viršutinis pasirinkimo valdymo įrankis",labelAccSelectionAffordanceBottom:"Apatinis pasirinkimo valdymo įrankis",labelEnableNonContiguousSelection:"Įjungti nesiribojančių pasirinkimą",labelDisableNonContiguousSelection:"Išjungti nesiribojančių pasirinkimą",labelResize:"Keisti dydį",labelResizePopupSubmit:"Gerai",labelResizePopupCancel:"Atšaukti",labelResizePopupSpinner:"Keisti stulpelio dydį",labelSelectRow:"Pasirinkti eilutę",labelEditRow:"Redaguoti eilutę",labelSelectAndEditRow:"Pasirinkti ir redaguoti eilutę",labelSelectColumn:"Pasirinkti stulpelį",labelSort:"Rikiuoti",labelSortAsc:"Rikiuoti didėjimo tvarka",labelSortDsc:"Rikiuoti mažėjimo tvarka",msgFetchingData:"Gaunami duomenys...",msgNoData:"Nėra rodytinų duomenų.",msgInitializing:"Inicijuojama...",msgColumnResizeWidthValidation:"Pločio reikšmė turi būti sveikasis skaičius.",msgScrollPolicyMaxCountSummary:"Viršytas eilučių skaičius, leidžiantis slinkti per lentelę.",msgScrollPolicyMaxCountDetail:"Įkelkite iš naujo naudodami mažesnį duomenų rinkinį.",msgStatusSortAscending:"{0} rikiuojamas didėjimo tvarka.",msgStatusSortDescending:"{0} rikiuojamas mažėjimo tvarka."},"oj-ojTabs":{labelCut:"Iškirpti",labelPasteBefore:"Įklijuoti prieš",labelPasteAfter:"Įklijuoti po",labelRemove:"Šalinti",labelReorder:"Pertvarkyti",removeCueText:"Pašalinama"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Paieškos laukas",noMatchesFound:"Atitikmenų nerasta",oneMatchesFound:"Rastas vienas atitikmuo",moreMatchesFound:"Rasta atitikmenų: {num}",filterFurther:"Yra daugiau rezultatų, tęskite filtravimą."},"oj-ojSwitch":{SwitchON:"Įj.",SwitchOFF:"Išj."},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Atitikmenų nerasta",oneMatchesFound:"Rastas vienas atitikmuo",moreMatchesFound:"Rasta atitikmenų: {num}",filterFurther:"Yra daugiau rezultatų, tęskite filtravimą."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Atitikmenų nerasta",oneMatchFound:"Rastas vienas atitikmuo",multipleMatchesFound:"Rasta atitikmenų: {num}",nOrMoreMatchesFound:"Rasta {num} arba daugiau atitikmenų",cancel:"Atšaukti",labelAccOpenDropdown:"išskleisti",labelAccClearValue:"valyti reikšmę",noResultsLine1:"Rezultatų nerasta",noResultsLine2:"Pagal jūsų paiešką nerasta jokių rezultatų."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Atitikmenų nerasta",oneMatchesFound:"Rastas vienas atitikmuo",moreMatchesFound:"Rasta atitikmenų: {num}"},"oj-ojTree":{stateLoading:"Įkeliama...",labelNewNode:"Naujas mazgas",labelMultiSelection:"Keli pasirinkimai",labelEdit:"Redaguoti",labelCreate:"Kurti",labelCut:"Iškirpti",labelCopy:"Kopijuoti",labelPaste:"Įklijuoti",labelPasteAfter:"Įklijuoti po",labelPasteBefore:"Įklijuoti prieš",labelRemove:"Šalinti",labelRename:"Pervardyti",labelNoData:"Nėra duomenų"},"oj-ojPagingControl":{labelAccPaging:"Numeravimas",labelAccPageNumber:"Įkeltas {pageNum} psl. turinys",labelAccNavFirstPage:"Pirmasis puslapis",labelAccNavLastPage:"Paskutinis puslapis",labelAccNavNextPage:"Kitas puslapis",labelAccNavPreviousPage:"Ankstesnis puslapis",labelAccNavPage:"Puslapis",labelLoadMore:"Rodyti daugiau...",labelLoadMoreMaxRows:"Pasiekta maksimali {maxRows} eilučių riba",labelNavInputPage:"Puslapis",labelNavInputPageMax:"iš {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} iš {pageMax} elementų",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} iš mažiausiai {pageMax} elem.",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} iš maždaug {pageMax} elem.",msgItemRangeNoTotal:"{pageFrom}-{pageTo} elementai",fullMsgItem:"{pageTo} iš {pageMax} elem.",fullMsgItemAtLeast:"{pageTo} iš mažiausiai {pageMax} elem.",fullMsgItemApprox:"{pageTo} iš maždaug {pageMax} elem.",msgItemNoTotal:"{pageTo} elem.",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"iš",msgItemRangeOfAtLeast:"iš mažiausiai",msgItemRangeOfApprox:"iš maždaug",msgItemRangeItems:"elementų",tipNavInputPage:"Eiti į puslapį",tipNavPageLink:"Eiti į {pageNum} puslapį",tipNavNextPage:"Paskesnis",tipNavPreviousPage:"Ankstesnis",tipNavFirstPage:"Pirmas",tipNavLastPage:"Paskutinis",pageInvalid:{summary:"Įvesta puslapio reikšmė neleidžiama.",detail:"Įveskite reikšmę didesnę už 0."},maxPageLinksInvalid:{summary:"maxPageLinks reikšmė yra neleistina.",detail:"Įveskite reikšmę didesnę už 4."}},"oj-ojMasonryLayout":{labelCut:"Iškirpti",labelPasteBefore:"Įklijuoti prieš",labelPasteAfter:"Įklijuoti po"},"oj-panel":{labelAccButtonExpand:"Išskleisti",labelAccButtonCollapse:"Sutraukti",labelAccButtonRemove:"Šalinti",labelAccFlipForward:"Versti į priekį",labelAccFlipBack:"Versti atgal",tipDragToReorder:"Vilkite, kad  pertvarkytumėte",labelAccDragToReorder:"Vilkite, kad pertvarkytumėte, yra kontekstinis meniu"},"oj-ojChart":{labelDefaultGroupName:"Grupė {0}",labelSeries:"Seka",labelGroup:"Grupė",labelDate:"Data",labelValue:"Reikšmė",labelTargetValue:"Tikslinis elementas",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procentai",labelLow:"Žemas",labelHigh:"Aukštas",labelOpen:"Atidaryti",labelClose:"Uždaryti",labelVolume:"Apimtis",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Maks.",labelOther:"Kita",tooltipPan:"Slinkti",tooltipSelect:"Nuosvyros pasirinkimas",tooltipZoom:"Nuosvyros mastelio keitimas",componentName:"Diagrama"},"oj-dvtBaseGauge":{componentName:"Matuoklis"},"oj-ojDiagram":{promotedLink:"{0} saitas",promotedLinks:"{0} saitai",promotedLinkAriaDesc:"Netiesioginis",componentName:"Diagrama"},"oj-ojGantt":{componentName:"Ganto",accessibleDurationDays:"{0} d.",accessibleDurationHours:"{0} val.",accessibleTaskInfo:"Pradžios laikas yra {0}, pabaigos laikas yra {1}, trukmė yra {2}",accessibleMilestoneInfo:"Laikas yra {0}",accessibleRowInfo:"Eilutė {0}",accessibleTaskTypeMilestone:"Gairė",accessibleTaskTypeSummary:"Santrauka",accessiblePredecessorInfo:"{0} pirmtakai",accessibleSuccessorInfo:"{0} perėmėjai",accessibleDependencyInfo:"Priklausomybės tipas {0}, sujungia {1} su {2}",startStartDependencyAriaDesc:"nuo pradžios iki pradžios",startFinishDependencyAriaDesc:"nuo pradžios iki pabaigos",finishStartDependencyAriaDesc:"nuo pabaigos iki pradžios",finishFinishDependencyAriaDesc:"nuo pabaigos iki pabaigos",tooltipZoomIn:"Artinti",tooltipZoomOut:"Tolinti",labelLevel:"Lygis",labelRow:"Eilutė",labelStart:"Pradžia",labelEnd:"Pabaiga",labelDate:"Data",labelBaselineStart:"Patvirtinta pradžia",labelBaselineEnd:"Patvirtinta pabaiga",labelBaselineDate:"Patvirtinta data",labelLabel:"Žyma",labelProgress:"Eiga",labelMoveBy:"Perkelti pagal",labelResizeBy:"Keisti dydį pagal",taskMoveInitiated:"Užduoties perkėlimas inicijuotas",taskResizeEndInitiated:"Inicijuota užduoties dydžio keitimo pabaiga",taskResizeStartInitiated:"Inicijuota užduoties dydžio keitimo pradžia",taskMoveSelectionInfo:"pasirinkta kitų: {0}",taskResizeSelectionInfo:"pasirinkta kitų: {0}",taskMoveInitiatedInstruction:"Norėdami pereiti, naudokite rodyklių klavišus",taskResizeInitiatedInstruction:"Norėdami keisti dydį, naudokite rodyklių klavišus",taskMoveFinalized:"Užduoties perkėlimas baigtas",taskResizeFinalized:"Užduoties dydžio keitimas baigtas",taskMoveCancelled:"Užduoties perkėlimas atšauktas",taskResizeCancelled:"Užduoties dydžio keitimas atšauktas",taskResizeStartHandle:"Valdyti užduoties dydžio keitimo pradžią",taskResizeEndHandle:"Valdyti užduoties dydžio keitimo pabaigą"},"oj-ojLegend":{componentName:"Legenda",tooltipExpand:"Išskleisti",tooltipCollapse:"Sutraukti"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Kiti",labelGroup:"Grupė",labelSize:"Dydis",labelAdditionalData:"Papildomi duomenys",componentName:"Laukas {0}"},"oj-ojPictoChart":{componentName:"Paveikslėlio diagrama"},"oj-ojSparkChart":{componentName:"Diagrama"},"oj-ojSunburst":{labelColor:"Spalva",labelSize:"Dydis",tooltipExpand:"Išskleisti",tooltipCollapse:"Sutraukti",componentName:"Daugialygė skritulinė diagrama"},"oj-ojTagCloud":{componentName:"Žymių debesis"},"oj-ojThematicMap":{componentName:"Teminis žemėlapis",areasRegion:"Sritys",linksRegion:"Nuorodos",markersRegion:"Žymekliai"},"oj-ojTimeAxis":{componentName:"Laiko ašis"},"oj-ojTimeline":{componentName:"Laiko planavimo juosta",accessibleItemDesc:"Aprašas yra {0}.",accessibleItemEnd:"Pabaigos laikas yra {0}.",accessibleItemStart:"Pradžios laikas yra {0}.",accessibleItemTitle:"Pavadinimas yra {0}.",labelSeries:"Seka",tooltipZoomIn:"Artinti",tooltipZoomOut:"Tolinti",labelStart:"Pradžia",labelEnd:"Pabaiga",labelDate:"Data",labelTitle:"Pavadinimas",labelDescription:"Aprašas"},"oj-ojTreemap":{labelColor:"Spalva",labelSize:"Dydis",tooltipIsolate:"Atskirti",tooltipRestore:"Atkurti",componentName:"Medžio schema"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Neleistini duomenys",labelNoData:"Nėra rodytinų duomenų",labelClearSelection:"Išvalyti pasirinktą sritį",labelDataVisualization:"Duomenų vizualizacija",stateSelected:"Pasirinkta",stateUnselected:"Nepasirinkta",stateMaximized:"Padidinta",stateMinimized:"Sumažinta",stateExpanded:"Išskleista",stateCollapsed:"Sutraukta",stateIsolated:"Atskirta",stateHidden:"Paslėpta",stateVisible:"Matoma",stateDrillable:"Kilmė analizuojama",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} iš {1}"},"oj-ojNavigationList":{defaultRootLabel:"Naršymo sąrašas",hierMenuBtnLabel:"Hierarchinio meniu mygtukas",selectedLabel:"pasirinkta",previousIcon:"Ankstesnis",msgFetchingData:"Gaunami duomenys...",msgNoData:"Nėra rodytinų elementų.",overflowItemLabel:"Daugiau",accessibleReorderTouchInstructionText:"Du kartus spustelėkite ir palaikykite. Palaukite, kol nuskambės garsas, tada pertvarkykite vilkdami.",accessibleReorderBeforeItem:"Prieš {item}",accessibleReorderAfterItem:"Po {item}",labelCut:"Iškirpti",labelPasteBefore:"Įklijuoti prieš",labelPasteAfter:"Įklijuoti po",labelRemove:"Šalinti",removeCueText:"Pašalinama"},"oj-ojSlider":{noValue:"ojSlider neturi reikšmės",maxMin:"Max turi būti lygi min arba didesnė",startEnd:"value.start negali būti vėlesnė nei value.end",valueRange:"Reikšmė turi būti intervale nuo min iki max",optionNum:"Parinktis {option} nėra skaičius",invalidStep:"Neleistinas žingsnis; žingsnis turi būti > 0"},"oj-ojDialog":{labelCloseIcon:"Uždaryti"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Įeinama į iššokančiųjų pranešimų sritį. Paspauskite F6, kad naršytumėte tarp iššokančiojo pranešimo ir susijusio valdiklio.",ariaLiveRegionInitialFocusNone:"Atidarytas iššokantysis pranešimas. Paspauskite F6, kad naršytumėte tarp iššokančiojo pranešimo ir susijusio valdiklio.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Atidaromas iššokantysis pranešimas. Iššokančiuosius pranešimus galima uždaryti pereinant prie paskutinio pranešimo saito.",ariaLiveRegionInitialFocusNoneTouch:"Atidarytas iššokantysis pranešimas. Pereikite prie paskesnio saito, kad nustatytumėte pasirinkimo sritį iššokančiajame pranešime.",ariaFocusSkipLink:"Bakstelėkite du kartus, kad pereitumėte prie atidaryto iššokančiojo pranešimo.",ariaCloseSkipLink:"Bakstelėkite du kartus, kad uždarytumėte atidarytą iššokantįjį pranešimą."},"oj-ojRefresher":{ariaRefreshLink:"Suaktyvinkite saitą, kad atnaujintumėte turinį",ariaRefreshingLink:"Atnaujinamas turinys",ariaRefreshCompleteLink:"Atnaujinimas baigtas"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Rodyti pradžios veiksmus",ariaShowEndActionsDescription:"Rodyti pabaigos veiksmus",ariaHideActionsDescription:"Slėpti veiksmus"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Nėra atitinkančios grupės antraštės",ariaOthersLabel:"skaičius",ariaInBetweenText:"Nuo {first} iki {second}",ariaKeyboardInstructionText:"Norėdami pasirinkti reikšmę, paspauskite Enter.",ariaTouchInstructionText:"Du kartus spustelėkite ir palaikykite, kad įjungtumėte gestų režimą, tada vilkite aukštyn arba žemyn, kad koreguotumėte reikšmę."},"oj-ojMenu":{labelCancel:"Atšaukti",ariaFocusSkipLink:"Pasirinktas visas meniu. Spustelėkite du kartus arba brūkštelėkite, kad būtų pasirinktas pirmas meniu elementas."},"oj-ojColorSpectrum":{labelHue:"Atspalvis",labelOpacity:"Nepermatomumas",labelSatLum:"Grynis/skaistis",labelThumbDesc:"Spalvų spektro keturkryptis slankiklis."},"oj-ojColorPalette":{labelNone:"Nėra"},"oj-ojColorPicker":{labelSwatches:"Pavyzdėliai",labelCustomColors:"Pasirinktinės spalvos",labelPrevColor:"Ankstesnė spalva",labelDefColor:"Numatytoji spalva",labelDelete:"Naikinti",labelDeleteQ:"Naikinti?",labelAdd:"Pridėti",labelAddColor:"Pridėti spalvą",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Atspalvis",labelSliderSaturation:"Grynis",labelSliderSat:"Gryn",labelSliderLightness:"Šviesumas",labelSliderLum:"Skaistis",labelSliderAlpha:"Alfa",labelOpacity:"Nepermatomumas",labelSliderRed:"Raudona",labelSliderGreen:"Žalia",labelSliderBlue:"Mėlyna"},"oj-ojFilePicker":{dropzoneText:"Vilkite failus čia arba spustelėkite ir nusiųskite",singleFileUploadError:"Vienu kartu galima įkelti vieną failą.",singleFileTypeUploadError:"{fileType} tipo failų įkelti negalima.",multipleFileTypeUploadError:"Šio tipo failų įkelti negalima: {fileTypes}.",dropzonePrimaryText:"Nuvilkimas",secondaryDropzoneText:"Pasirinkite failą arba jį nuvilkite čia.",secondaryDropzoneTextMultiple:"Pasirinkite arba nuvilkite failus čia.",unknownFileType:"nežinoma"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Vykdoma"},"oj-ojMessage":{labelCloseIcon:"Uždaryti",categories:{error:"Klaida",warning:"Įspėjimas",info:"Informacija",confirmation:"Patvirtinimas"}},"oj-ojSelector":{checkboxAriaLabel:"Žymės langelis pasirinkti {rowKey}"},"oj-ojMessages":{labelLandmark:"Pranešimai",ariaLiveRegion:{navigationFromKeyboard:"Įeinama į pranešimų sritį. Paspauskite F6, kad grįžtumėte prie ankstesnio pasirinkto elemento.",navigationToTouch:"Pranešimų srityje yra naujų pranešimų. Naudokite „VoiceOver“ įrankį, kad grįžtumėte prie pranešimų orientyro.",navigationToKeyboard:"Pranešimų srityje yra naujų pranešimų. Paspauskite F6, kad grįžtumėte prie naujausių pranešimų srities.",newMessage:"Pranešimo kategorija {category}. {summary}. {detail}."}}});