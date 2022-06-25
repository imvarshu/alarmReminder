import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = ({time, onChange}) => {
    return (
        <DateTimePicker
            testID="dateTimePicker"
            display="spinner"
            value={time}
            mode='time'
            is24Hour={false}
            onChange={(event, selectedDate) => { onChange(selectedDate); }}
            themeVariant="dark"
            />
    )
}
export default TimePicker;