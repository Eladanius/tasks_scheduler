import './schedulePopup.css';

interface Props {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
}

const SchedulePopup = ({ isVisible, setVisible }: Props) => {
  return (
    <div className={isVisible ? 'schedule-popup_root' : 'schedule-popup_root hidden'}>
      <div className='schedule-popup_header'>
        <h3>Schedule time:</h3>
      </div>
      <div className='schedule-popup_body'>
        <div className='schedule-popup_footer'>
          <button onClick={() => setVisible(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePopup;
