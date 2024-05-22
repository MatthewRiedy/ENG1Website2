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
  