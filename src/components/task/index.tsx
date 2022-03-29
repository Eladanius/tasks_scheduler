import { useEffect, useState } from 'react';
import SchedulePopup from './subcomponents/SchedulePopup';
import './taskComponent.css';
import calculateTimeLeft from './utils/countdownTimer';
import { Stopwatch } from 'react-bootstrap-icons';
interface Props {
  title: string;
  content: string;
}

const TaskComponent = ({ title, content }: Props) => {
  const [schedulePopupVisible, setSchedulePopupVisible] = useState(false);
  const [scheduledDate, setScheduledDate] = useState<string>();
  const [scheduledTime, setScheduledTime] = useState<string>();
  const [timeLeft, setTimeLeft] = useState<any>();

  useEffect(() => {
    if (scheduledDate) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(scheduledDate || '', scheduledTime || ''));
      }, 1000);

      return () => clearTimeout(timer);
    }
  });
  console.log(timeLeft);

  return (
    <>
      <SchedulePopup
        isVisible={schedulePopupVisible}
        setVisible={setSchedulePopupVisible}
        date={scheduledDate}
        time={scheduledTime}
        setDate={setScheduledDate}
        setTime={setScheduledTime}
      />
      {schedulePopupVisible ? <div className='screenlocker'></div> : <></>}
      <div className='task_row'>
        <div className='task_title'>
          <h3>{title}</h3>
        </div>
        <div className='task_body'>
          <span>{content}</span>
          <div className='schedule_settings'>
            <h5>Date: </h5>
            <span className='schedule_settings__element'>{scheduledDate || '??-??-????'}</span>
            <h5>Time: </h5>
            <span className='schedule_settings__element'>{scheduledTime || '??-??'}</span>
          </div>
        </div>
        <div className='task_actions'>
          <button onClick={() => setSchedulePopupVisible(true)}>Schedule</button>
        </div>
      </div>
      {!scheduledDate ? (
        <></>
      ) : (
        <div className='timer'>
          {/* <Stopwatch className='timer-icon' /> */}
          {Object.keys(timeLeft || {})?.map((key, i) => {
            return timeLeft[key] === 0 ? (
              <></>
            ) : (
              <>
                <h5 style={{margin:'0 4px 0 10px'}}>{key}:</h5>
                <span>{timeLeft[key]}</span>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TaskComponent;
