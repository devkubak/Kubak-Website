<script lang="ts">
  export let name: string;
  export let emailUser: string;
  export let message: string;
  export let imageUrl: string = 'https://kubak.co/images/kubak2.png';
</script>






      <img 
        src="{imageUrl}" 
        alt="Logo" 
        style="
          width: 100%; 
          display: flex; 
    justify-content: center; 
    align-items: center; 
          height: auto;     
          padding-bottom: 10px;">

  

        <h2
        style="
          font-size: 14px; 
          color: #333333; 
          margin-bottom: 20px; 
          text-align: center;">
        Customer Name:{name}
      </h2>
   


      <div style="width: 100%; height:auto;">
        <h2 
        style="
          font-size: 14px; 
          color: #333333; 
          margin-bottom: 20px; 
          text-align: center;">
        Customer Email: {emailUser}
      </h2>
      </div>
  <div 
    style="
      font-size: 16px; 
      color: #666666; 
      line-height: 1.6; 
      text-align: center;">
    <p>You have received a new message:</p>
    <blockquote style="margin: 10px 0;  color: #333333; ">{message}</blockquote>
  </div>
  
  <div 
    style="
      margin-top: 30px; 
      font-style: normal; 
      color: #333333; 
      text-align: center;">
    Best regards,
    <div style="margin-top: 5px; font-size: 16px;">Kubak Group Team</div>
  </div>

