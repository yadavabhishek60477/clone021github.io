import React,{useState} from 'react'
import StudentLayout from '../components/studentlayout'

function FeedbackContent(){

  const dummyFaculties = [
    "Dr. John Smith",
    "Prof. Emily Johnson",
    "Dr. Michael Brown",
    "Prof. Sarah Martinez",
    "Dr. David Wilson",
    "Prof. Jennifer Anderson",
    "Dr. Christopher Taylor",
    "Prof. Amanda Thompson",
    "Dr. Robert Garcia",
    "Prof. Jessica Lee"
  ];
  
  const dummySubjects = [
    {
      subjectName: 'Mathematics',
      subjectCode: 'MATH101',
      branch: 'Mathematics',
      totalLectures: 30,
      year: 2022,
      attendance: '75%',
      instructorName: 'Dr. Smith',
      credits: 3
    },
    {
      subjectName: 'Computer Science',
      subjectCode: 'CS101',
      branch: 'Computer Science',
      totalLectures: 35,
      year: 2022,
      attendance: '80%',
      instructorName: 'Prof. Johnson',
      credits: 4
    },
    {
      subjectName: 'Electrical Circuits',
      subjectCode: 'EE101',
      branch: 'Electrical Engineering',
      totalLectures: 28,
      year: 2022,
      attendance: '70%',
      instructorName: 'Dr. Anderson',
      credits: 3
    },
    {
      subjectName: 'Digital Electronics',
      subjectCode: 'EE201',
      branch: 'Electrical Engineering',
      totalLectures: 32,
      year: 2022,
      attendance: '75%',
      instructorName: 'Prof. Smith',
      credits: 4
    },
    {
      subjectName: 'Thermodynamics',
      subjectCode: 'ME101',
      branch: 'Mechanical Engineering',
      totalLectures: 27,
      year: 2022,
      attendance: '68%',
      instructorName: 'Dr. Brown',
      credits: 3
    },
    {
      subjectName: 'Fluid Mechanics',
      subjectCode: 'ME201',
      branch: 'Mechanical Engineering',
      totalLectures: 31,
      year: 2022,
      attendance: '72%',
      instructorName: 'Prof. Taylor',
      credits: 4
    },
    {
      subjectName: 'Structural Engineering',
      subjectCode: 'CE101',
      branch: 'Civil Engineering',
      totalLectures: 30,
      year: 2022,
      attendance: '75%',
      instructorName: 'Dr. Martinez',
      credits: 3
    },
    {
      subjectName: 'Transportation Engineering',
      subjectCode: 'CE201',
      branch: 'Civil Engineering',
      totalLectures: 32,
      year: 2022,
      attendance: '78%',
      instructorName: 'Prof. Wilson',
      credits: 4
    },
    {
      subjectName: 'Chemical Reactions',
      subjectCode: 'CH101',
      branch: 'Chemical Engineering',
      totalLectures: 28,
      year: 2022,
      attendance: '70%',
      instructorName: 'Dr. Jackson',
      credits: 3
    },
    {
      subjectName: 'Organic Chemistry',
      subjectCode: 'CH201',
      branch: 'Chemical Engineering',
      totalLectures: 32,
      year: 2022,
      attendance: '75%',
      instructorName: 'Prof. White',
      credits: 4
    }
  ];


  const [formData, setFormData] = useState({
        subjectCode: '',
        instructorName: '',
        courseReview: '',
        courseImprovement: '',
        instructorReview: '',
        instructorImprovement: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to backend or perform desired action
        console.log(formData);
        // Reset form after submission
        setFormData({
            subjectCode: '',
            instructorName: '',
            courseReview: '',
            courseImprovement: '',
            instructorReview: '',
            instructorImprovement: ''
        });
    };

    return (
        <div className="container mx-auto p-4 overflow-auto">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Course and Faculty Feedback</h1>
            <form onSubmit={handleSubmit} className='overflow-auto'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectCode">
                        Subject Code
                    </label>
                    <select
                        id="subjectCode"
                        name="subjectCode"
                        value={formData.subjectCode}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Subject Code</option>
                        {dummySubjects.map((subject,index)=> (
                          <option key={index} value={subject.subjectCode}>{subject.subjectCode}</option>
                        ))} 
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
                        Instructor Name
                    </label>
                    <select
                        id="instructorName"
                        name="instructorName"
                        value={formData.instructorName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Instructor Name</option>
                        {dummyFaculties.map((faculty,index)=> (
                          <option key={index} value={faculty}>{faculty}</option>
                        ))} 
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseReview">
                        Course Review
                    </label>
                    <textarea
                        id="courseReview"
                        name="courseReview"
                        placeholder='Write Course Review'
                        value={formData.courseReview}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseImprovement">
                        Course Improvement
                    </label>
                    <textarea
                        id="courseImprovement"
                        name="courseImprovement"
                        placeholder='Course Improvements'
                        value={formData.courseImprovement}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorReview">
                        Instructor Review
                    </label>
                    <textarea
                        id="instructorReview"
                        name="instructorReview"
                        placeholder='Instructor Review'
                        value={formData.instructorReview}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorImprovement">
                        Instructor Improvement
                    </label>
                    <textarea
                        id="instructorImprovement"
                        name="instructorImprovement"
                        placeholder='Instructor Improvements'
                        value={formData.instructorImprovement}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};


function Feedback() {
  return (
    <> 
      <StudentLayout>
        <FeedbackContent/>
      </StudentLayout>
    </>
  )
}

export default Feedback
