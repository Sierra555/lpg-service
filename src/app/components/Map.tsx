'use client';

const Map = () => {
  return (
    <div className="h-[35vh] rounded-lg overflow-hidden">
     <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.0465201223091!2d23.984501999740708!3d49.83132510169829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae77d321f9311%3A0x1646bf59618a0ef2!2z0J3QsNGA0L7QtNC90LAsINCy0YPQu9C40YbRjyDQndCw0YDQvtC00L3QsCwgMTksINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1735316439769!5m2!1suk!2sua"      width="600" 
      height="450"
      style={{ border: 0 }}
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
