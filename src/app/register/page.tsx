import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <RegisterForm />
      </div>
    </main>
  );
}