import { DateInputField } from "../../lib/interfaces"
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

export default function DatePicker({ field }: { field: DateInputField }) {
    return (
        <div>
            <MUIDatePicker 
                label={field.label} 
                // defaultValue={dayjs()} 
                slotProps={{
                    textField: {
                        required: field.required,
                        ...(field.errorMsg && { helperText: field.errorMsg })
                    }
                }} 
            />
        </div>
    )
}