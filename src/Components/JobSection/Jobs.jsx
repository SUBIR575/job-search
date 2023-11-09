import { BiTimeFive } from 'react-icons/bi'
import logo from '../../assets/logo.png'
const Jobs = () => {
    const data = [{
        "id": 1,
        "image": "http://dummyimage.com/128x100.png/cc0000/ffffff",
        "title": "netvibes.com",
        "time": "9/18/2022",
        "location": "7 Corscot Alley",
        "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "company": "Cardify"
    }, {
        "id": 2,
        "image": "http://dummyimage.com/248x100.png/cc0000/ffffff",
        "title": "intel.com",
        "time": "4/28/2023",
        "location": "101 Sage Alley",
        "desc": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "company": "Sonsing"
    }, {
        "id": 3,
        "image": "http://dummyimage.com/233x100.png/dddddd/000000",
        "title": "netscape.com",
        "time": "4/12/2023",
        "location": "68899 Anderson Avenue",
        "desc": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
        "company": "Job"
    }, {
        "id": 4,
        "image": "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
        "title": "fda.gov",
        "time": "9/21/2022",
        "location": "702 Calypso Hill",
        "desc": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        "company": "Tresom"
    }, {
        "id": 5,
        "image": "http://dummyimage.com/191x100.png/dddddd/000000",
        "title": "nytimes.com",
        "time": "11/15/2022",
        "location": "3786 Duke Road",
        "desc": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "company": "Bamity"
    }, {
        "id": 6,
        "image": "http://dummyimage.com/247x100.png/cc0000/ffffff",
        "title": "cnbc.com",
        "time": "11/3/2022",
        "location": "1 Barnett Pass",
        "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "company": "Namfix"
    }, {
        "id": 7,
        "image": "http://dummyimage.com/242x100.png/dddddd/000000",
        "title": "chronoengine.com",
        "time": "6/4/2023",
        "location": "7 Sugar Street",
        "desc": "Nam tristique tortor eu pede.",
        "company": "Home Ing"
    }, {
        "id": 8,
        "image": "http://dummyimage.com/133x100.png/ff4444/ffffff",
        "title": "nature.com",
        "time": "4/24/2023",
        "location": "07 David Hill",
        "desc": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "company": "Cardify"
    }, {
        "id": 9,
        "image": "http://dummyimage.com/242x100.png/dddddd/000000",
        "title": "usa.gov",
        "time": "2/23/2023",
        "location": "60 Grayhawk Avenue",
        "desc": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        "company": "Redhold"
    }, {
        "id": 10,
        "image": "http://dummyimage.com/207x100.png/dddddd/000000",
        "title": "ibm.com",
        "time": "10/14/2022",
        "location": "178 Vermont Way",
        "desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
        "company": "It"
    }]
    return (
        <>
            <div className="jobContainer flex flex-wrap justify-center items-center gap-10 py-10">
               { data?.map((i,index)=>(
                <div key={index} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <span className=" flex justify-between items-center gap-4">
                        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                            {i.title}
                        </h1>
                        <span className='flex items-center gap-2 text-[#ccc]'>
                            <BiTimeFive />Now
                        </span>
                    </span>
                    <h6 className=' text-[#ccc]'>India</h6>
                    <p className='text-[13px] text-[#969696] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        loream ispum is the meaningless condition
                    </p>
                    <div className='flex item-center gap-2'>
                        <img src={logo} alt='companyImage' width='30px' height='auto'/>
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Wipro </span>
                    </div>
                    <button className=' rounded-[10px] p-[10px] border-[2px] w-full block font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
                </div>))}
            </div>
        </>
    )
}

export default Jobs