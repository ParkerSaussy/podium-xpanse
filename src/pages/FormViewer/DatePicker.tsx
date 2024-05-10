import { DateInputField } from "../../lib/interfaces"
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

export default function DatePicker({ field, updateResults }: { field: DateInputField, updateResults: (id: string, value: any) => void }) {
    return (
        <div>
            <MUIDatePicker 
                label={field.label} 
                onChange={(e) => { console.log(e) }}
                defaultValue={dayjs()} 
                slotProps={{
                    textField: {
                        required: field.required,
                        ...(field.errorMsg && { 
                            helperText: field.errorMsg 
                        })
                    }
                }} 
            />
        </div>
    )
}