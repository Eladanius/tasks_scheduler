import { useEffect, useState } from 'react';
import './schedulePopup.css';

interface Props {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
  date: string | undefined;
  time: string | undefined;
  setTime: (value: string) => void;
  setDate: (value: string) => void;
}

const SchedulePopup = ({ isVisible, setVisible, date, time, setDate, setTime }: Props) => {

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  useEffect(() => {
    setSelectedDate(date || '');
    setSelectedTime(time || '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleOk = () => {
    if (!selectedDate) {
      alert('Please set data');
      return;
    }
    if (!selectedTime) {
      alert('Please set time');
      return;
    }
    setDate(selectedDate!);
    setTime(selectedTime!);
  };
  
  return (
    <div className={isVisible ? 'schedule-popup_root' : 'schedule-popup_root hidden'}>
      <div className='schedule-popup_header'>
        <h3>Schedule time:</h3>
      </div>
      <div className='schedule-popup_body'>
        <div className='row'>
          <span>Date:</span>
          <input type='date' value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
        </div>
        <div className='row'>
          <span>Time:</span>
          <input type='time' value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)} />
        </div>
        <div className='schedule-popup_footer'>
          <button className='footer_el' onClick={handleOk}>
            Ok
          </button>
          <button className='footer_el' onClick={() => setVisible(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePopup;
