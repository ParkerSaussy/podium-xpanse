import { DateInputField } from "../../lib/interfaces"
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

export default function DatePicker({ field, error, updateResults }: { 
    field: DateInputField, 
    error?: boolean, 
    updateResults: (id: string, value: any) => void 
}) {
    const onChangeDate = (e: dayjs.Dayjs | null) => {
        const formatted = e?.format('MM-DD-YYYY') || null;
        if (formatted) updateResults(field.id, formatted);
    }

    return (
        <div>
            <MUIDatePicker 
                label={field.label} 
                onChange={(e: dayjs.Dayjs | null) => onChangeDate(e) }
                // defaultValue={dayjs()} // Open this up later maybe
                slotProps={{
                    textField: {
                        required: field.required,
                        ...((field.errorMsg && error) && { 
                            helperText: field.errorMsg 
                        })
                    }
                }} 
            />
        </div>
    )
}