import img_1 from '../assets/img/webp/redd-francisco-5U_28ojjgms-unsplash.webp';

function LatestJobs() {
  return (
    <div className='latest_jobs'>
      <img className='meeting_img' src={img_1} alt="group_meeting" />
      <div className='jobs_text_container'>
        <p>We&apos;re really proud of the work we&apos;ve done so far. But there&apos;s so much more to come. If you&apos;d like to be a part of it, please join us.</p>
        <a href="#">See latest jobs &gt;</a>
      </div>
    </div>
  )
}
export default LatestJobs;