import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt(`Please enter new title for Event`);
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
    
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure want to delete the event '${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box flex ="1 1 20%" backgroundColor={colors.primary[700]} p="15px" borderRadius="4px">
        <Typography variant="h5"> Events </Typography>
        <List>
            {currentEvents.map((event)=>(
                <ListItem 
                key={event.id}
                sx={{
                    backgroundColor: colors.green[600],
                    margin: "10px 0",
                    borderRadius: "2px",
                   
                }}
                >
                <ListItemText primary={event.title}
                secondary={
                    <Typography>
                        {formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </Typography>
                }
                />                
                </ListItem>
            ))}
        </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100% " ml="15px" >
        <FullCalendar 
        height="75vh"
        plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin, 
            listPlugin,
        ]}
        headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
       editable={true}
       selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        initialEvents={[
            {id: "1234", title: "All-day event", date:"2022-11-15"},
            {id: "2345", title: "Timed-event", date:"2022-11-29"},
            {id: "2885", title: "Birthday", date:"2022-1-13"},
            {id: "2085", title: "Birthday", date:"2022-12-13"},
            {id: "2895", title: "Christmas Event", date:"2022-12-25"},
          
        ]}
        />


        </Box>

      </Box>
    </Box>
  );
};

export default Calendar;
