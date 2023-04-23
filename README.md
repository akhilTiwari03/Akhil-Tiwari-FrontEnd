# Questions:

# Question 1: Explain what the simple List component does.
Ans : The code represents a List component in React that displays a vertical list of items. Each item is represented by a SingleListItem component that displays text and can be selected by the user. When an item is selected, its background color changes to green. The List component manages the state of the selected item and passes it down to the SingleListItem component as a prop. It also resets the selected item when the list of items changes. The code also includes some PropTypes validation for the props passed to the components.

# Question 2: What problems / warnings are there with code?
Ans: There are a few issues with the code:

The setSelectedIndex hook is being called incorrectly in the List component. It should be const [selectedIndex, setSelectedIndex] = useState(); instead of const [setSelectedIndex, selectedIndex] = useState();.

The PropTypes validation for the items prop in the List component is incorrect. It should be items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired })) instead of items: PropTypes.array(PropTypes.shapeOf({ text: PropTypes.string.isRequired })).

The onClickHandler function in the SingleListItem component is not being passed the index correctly. It should be onClick={() => onClickHandler(index)} instead of onClick={onClickHandler(index)}.

The isSelected prop in the SingleListItem component is not being passed the correct value. It should be isSelected={selectedIndex === index} instead of isSelected={selectedIndex}.

The memoization of the SingleListItem and List components may not be necessary, depending on the use case and performance requirements of the application. It is possible that the memoization could actually harm performance if the components are being re-rendered frequently.

#Question 3: Please fix, optimize, and/or modify the component as much as you think is necessary. 
Ans: It is being fixed and the corrected code is being attached in the repository.

# Thankyou
