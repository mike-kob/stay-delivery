import ImageKit from 'imagekit';

const imageKit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/jzi56985gkt',
  publicKey: 'public_6pr648IxC9UjibZ8nnjNtChLPnc=',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export default function handler(req, res) {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
}
