document.addEventListener('DOMContentLoaded', function() {
    const pdfMapping = {
      box1: 'assets/files/Req1.pdf',
      box2: 'assets/files/Arch1.pdf',
      box3: 'assets/files/Plan1.pdf',
      box4: 'assets/files/Risk1.pdf',
      box5: 'assets/files/Impl1.pdf',
      box6: 'https://github.com/ENGTeam11/11Game',
      box7: 'assets/files/desktop-1.0.jar',
      box8: 'assets/files/Add1.pdf',
      box9: 'assets/files/Req2.pdf',
      box10: 'assets/files/Arch2.pdf',
      box11: 'assets/files/Plan2.pdf',
      box12: 'assets/files/Risk2.pdf',
      box13: 'assets/files/Impl2.pdf',
      box14: 'https://github.com/BenSlater28/ENG1-part-2',
      box15: 'assets/files/desktop-2.0.jar',
      box16: 'assets/files/Add2.pdf',
      box17: 'assets/files/User_Evaluation.pdf',
      box18: 'assets/files/Test.pdf',
    };
  
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      box.addEventListener('click', function() {
        const boxId = this.id;
        const pdfUrl = pdfMapping[boxId];
        if(pdfUrl) {
          window.open(pdfUrl, '_blank');
        } else {
          console.error('PDF URL not found for box:', boxId);
        }
      });
    });
  });
  
