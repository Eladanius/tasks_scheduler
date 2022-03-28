import { useState } from 'react';
import SchedulePopup from './subcomponents/SchedulePopup';
import './taskComponent.css';

interface Props {
  title: string;
  content: string;
}

const TaskComponent = ({ title, content }: Props) => {
  const [schedulePopupVisible, setSchedulePopupVisible] = useState(false);
  return (
    <>
      <SchedulePopup isVisible={schedulePopupVisible} setVisible={setSchedulePopupVisible} />
      {schedulePopupVisible ? <div className='screenlocker'></div> : <></>}
      <div className='task_row'>
        <div className='task_title'>
          <h3>{title}</h3>
        </div>
        <div className='task_body'>
          <span>{content}</span>
        </div>
        <div className='task_actions'>
          <button onClick={() => setSchedulePopupVisible(true)}>Schedule</button>
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
