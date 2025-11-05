import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface TicketCalendarProps {
  onDateTimeSelect: (date: Date, time: string) => void;
}

const OPENING_HOURS = {
  weekday: { start: 10, end: 20 },
  saturday: { start: 10, end: 22 },
  sunday: { start: 12, end: 20 }
};

export default function TicketCalendar({ onDateTimeSelect }: TicketCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getAvailableTimes = (date: Date) => {
    const day = date.getDay();
    let hours: { start: number; end: number };

    if (day === 6) {
      hours = OPENING_HOURS.saturday;
    } else if (day === 0) {
      hours = OPENING_HOURS.sunday;
    } else {
      hours = OPENING_HOURS.weekday;
    }

    const times: string[] = [];
    for (let hour = hours.start; hour < hours.end; hour++) {
      times.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < hours.end - 1) {
        times.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }

    return times;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onDateTimeSelect(selectedDate, time);
    }
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isDisabled = isDateDisabled(date);
    const isSelected = selectedDate?.getDate() === day &&
                       selectedDate?.getMonth() === month &&
                       selectedDate?.getFullYear() === year;

    days.push(
      <button
        key={day}
        onClick={() => handleDateSelect(day)}
        disabled={isDisabled}
        className={`aspect-square p-1 rounded-md text-sm transition-all duration-200 ${
          isDisabled
            ? 'text-slate-600 cursor-not-allowed'
            : isSelected
            ? 'bg-cyan-500 text-white font-bold'
            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
      <div className="flex items-center justify-center mb-4">
        <CalendarIcon className="w-5 h-5 text-cyan-400 mr-2" />
        <h3 className="text-xl font-bold text-white">Selecciona Fecha y Hora</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h4 className="text-base font-semibold text-white">
              {monthNames[month]} {year}
            </h4>
            <button
              onClick={nextMonth}
              className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5 mb-1.5">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, index) => (
              <div key={index} className="text-center text-slate-400 font-semibold text-xs">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {days}
          </div>

          <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
            <h5 className="text-white font-semibold mb-1.5 text-xs">Horarios:</h5>
            <div className="text-slate-300 text-xs space-y-0.5">
              <p>Viernes: 18:00 - 22:00</p>
              <p>Sábados: 11:00 - 15:00 y 18:00 - 22:00</p>
              <p>Domingos: 11:00 - 15:00 y 17:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white mb-3">
            {selectedDate
              ? `Horarios disponibles - ${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()]}`
              : 'Selecciona una fecha'}
          </h4>

          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
              {getAvailableTimes(selectedDate).map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-56 text-slate-500">
              <div className="text-center">
                <CalendarIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Selecciona una fecha para ver horarios disponibles</p>
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="mt-4 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg">
              <p className="text-white font-semibold text-center text-sm">
                Seleccionado: {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]} a las {selectedTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
