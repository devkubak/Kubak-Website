<script lang="ts">
  export let name: string;
  export let emailUser: string;
  export let message: string;
  export let phone: number;
  export let imageUrl: string = 'https://kubak.co/images/kubak.png';
</script>

<div style="
  max-width: 800px;
  margin: 0 auto;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;">

  <!-- Cover Section with Logo -->
  <div style="
    background: linear-gradient(to right, #f17f18, #f59f51);
    padding: 40px;
    border-radius: 20px;
    text-align: center;">
    
    <img 
      src="{imageUrl}" 
      alt="Kubak Logo" 
      style="
        width: 300px;
        height: auto;
        ">
  </div>

  <!-- User Details Section -->
  <div style="padding: 40px;">
    <h2 style="
      font-size: 14px; 
      color: #666666; 
      margin-bottom: 20px; 
      text-align: center;">
      Customer Name: <span style="color: #333333;">{name}</span>
    </h2>

    <h2 style="
      font-size: 14px; 
      color: #666666; 
      margin-bottom: 20px; 
      text-align: center;">
      Phone Number: <span style="color: #333333;">{phone}</span>
    </h2>

    <h2 style="
      font-size: 14px; 
      color: #666666; 
      margin-bottom: 20px; 
      text-align: center;">
      Customer Email: <span style="color: #333333;">{emailUser}</span>
    </h2>
  </div>

  <!-- Message Section -->
  <div style="
    font-size: 16px; 
    color: #666666; 
    line-height: 1.6; 
    text-align: center;
    padding: 0 40px;">
    <p>You have received a new message:</p>
    <blockquote style="
      margin: 20px 0; 
      padding: 20px; 
      color: #333333; 
      border-left: 4px solid #3b82f6;
      background-color: rgba(59, 130, 246, 0.05);">
      {message}
    </blockquote>
  </div>
  
  <!-- Signature Section -->
  <div style="
    margin-top: 40px; 
    padding: 40px;
    text-align: center;">
    <div style="
      color: #666666;
      margin-bottom: 10px;">
      Best regards,
    </div>
    <div style="
      color: #333333;
      font-size: 16px;
      font-weight: 600;">
      Kubak Group Team
    </div>
  </div>
</div>

