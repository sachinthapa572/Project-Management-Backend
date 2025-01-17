import mongoose,{ Document,Schema } from 'mongoose';
import { compareValue,hashValue } from '../utils/bcrypt';

export interface UserDocument extends Document {
  name: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  isActive: boolean;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
  currentWorkspace: mongoose.Types.ObjectId | null;
    subscriptionTier : mongoose.Types.ObjectId | null;
    subscriptionStartDate : Date | null;
    subscriptionEndDate : Date | null;
    max_workspaces : number;
    max_projects_per_workspace : number;
  comparePassword(value: string): Promise<boolean>;

    omitPassword () : Omit<UserDocument,'password'>;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, select: true },
    profilePicture: {
      type: String,
      default: null,
    },
    currentWorkspace: {
      type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
    },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date, default: null },
      subscriptionTier: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pricing',
          default: null,

      },
      subscriptionStartDate: {
          type: Date,
          default: null,
      },
      subscriptionEndDate: {
          type: Date,
          default: null,
      },
      max_workspaces: {
          type: Number,
          default: 1,
      },
      max_projects_per_workspace: {
          type: Number,
          default: 10,
      },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save',async function (next) {
    if (this.isModified('password')) {
    if (this.password) {
      this.password = await hashValue(this.password);
    }
  }
  next();
});

userSchema.methods.omitPassword = function () : Omit<UserDocument,'password'> {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.comparePassword = async function (value: string) {
  return compareValue(value, this.password);
};

const UserModel = mongoose.model<UserDocument>('User',userSchema);
export default UserModel;
