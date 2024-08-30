# Telephone Number Validator

## User Stories:

- You should have an __input__ element with an id of *"user-input"*

- You should have a __button__ element with an id of *"check-btn"*

- You should have a __button__ element with an id of *"clear-btn"*

- You should have a __div__, __span__ or __p__ element with an id of *"results-div"*

- When you click on the *#check-btn* element without entering a value into the *#user-input* element, an alert should appear with the text __"Please provide a phone number"__

- When you click on the *#clear-btn* element, the content within the *#results-div* element should be removed

- When the _#user-input_ element contains __1 555-555-5555__ and the _*#check-btn* element is clicked, the _#results-div_ element should contain the text __"Valid US number: 1 555-555-5555"__

- When the _#user-input_ element contains __1 (555) 555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: 1 (555) 555-5555"__

- When the _#user-input_ element contains __5555555555__ and the _#check-btn_ element is clicked, the #results-div element should contain the text __"Valid US number: 5555555555"__

- When the _#user-input_ element contains __555-555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: 555-555-5555"__

- When the _#user-input_ element contains __(555)555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: (555)555-5555"__

- When the _#user-input_ element contains __1(555)555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: 1(555)555-5555"__

- When the _#user-input_ element contains __555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 555-5555"__

- When the _#user-input_ element contains __5555555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 5555555"__

- When the _#user-input_ element contains __1 555)555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 1 555)555-5555"__

- When the _#user-input_ element contains __1 555 555 5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: 1 555 555 5555"__

- When the _#user-input_ element contains __1 456 789 4444__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Valid US number: 1 456 789 4444"__

- When _#user-input_ contains __123**&!!asdf#__ and _#check-btn_ is clicked, _#results-div_ should contain the text __"Invalid US number: 123**&!!asdf#"__

- When the _#user-input_ element contains __55555555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 55555555"__

- When the _#user-input_ element contains __(6054756961)__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: (6054756961)"__

- When the _#user-input_ element contains __2 (757) 622-7382__ and the #check-btn element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 2 (757) 622-7382"__

- When the _#user-input_ element contains __0 (757) 622-7382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 0 (757) 622-7382"__

- When the _#user-input_ element contains __-1 (757) 622-7382__ and the #check-btn element is clicked, the _#results-div_ element should contain the text __"Invalid US number: -1 (757) 622-7382"__

- When the _#user-input_ element contains __2 757 622-7382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 2 757 622-7382"__

- When the _#user-input_ element contains __10 (757) 622-7382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 10 (757) 622-7382"__

- When the _#user-input_ element contains __27576227382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 27576227382"__

- When the _#user-input_ element contains __(275)76227382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: (275)76227382"__

- When the _#user-input_ element contains __2(757)6227382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 2(757)6227382"__

- When the _#user-input_ element contains __2(757)622-7382__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 2(757)622-7382"__

- When the _#user-input_ element contains __555)-555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 555)-555-5555"__

- When the _#user-input_ element contains __(555-555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: (555-555-5555"__

- When _#user-input_ contains __(555)5(55?)-5555__ and _#check-btn_ is clicked, _#results-div_ should contain the text __"Invalid US number: (555)5(55?)-5555"__

- When the _#user-input_ element contains __55 55-55-555-5__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 55 55-55-555-5"__

- When the _#user-input_ element contains __11 555-555-5555__ and the _#check-btn_ element is clicked, the _#results-div_ element should contain the text __"Invalid US number: 11 555-555-5555"__