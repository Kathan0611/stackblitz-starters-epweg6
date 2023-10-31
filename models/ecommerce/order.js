import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quatity: {
    type: Number,
    required: true,
  },
});
const orderschema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
      default: 'PENDING',
    },
    orderPrice: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderAddress: {
      type: String,
      required: true,
    },
    orderItem: [orderItemSchema],
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderschema);
