"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  upiId: string; // e.g. "ganeshutsav@upi"
  payeeName?: string;
  defaultAmount?: number;
  note?: string;
  className?: string;
};

function buildUpiLink(
  upiId: string,
  payeeName?: string,
  amount?: number,
  note?: string
) {
  const p = new URLSearchParams();
  p.set("pa", upiId);
  if (payeeName) p.set("pn", payeeName);
  p.set("cu", "INR");
  if (amount && amount > 0) p.set("am", String(amount));
  if (note) p.set("tn", note);
  return `upi://pay?${p.toString()}`;
}

export function UpiQR({
  upiId,
  payeeName = "Parel Cha Maharaja",
  defaultAmount = 501,
  note = "Donation",
  className,
}: Props) {
  const [amount, setAmount] = useState<number | undefined>(defaultAmount);
  const [qr, setQr] = useState<string>("");
  const upiLink = useMemo(
    () => buildUpiLink(upiId, payeeName, amount, note),
    [upiId, payeeName, amount, note]
  );

  useEffect(() => {
    let mounted = true;
    QRCode.toDataURL(upiLink, { width: 480, margin: 2 })
      .then((url) => mounted && setQr(url))
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [upiLink]);

  return (
    <Card className={cn("max-w-xl mx-auto", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-balance">Donate via UPI</CardTitle>
        <CardDescription className="text-pretty">
          Scan or tap to pay. UPI ID: {upiId}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qr || "/placeholder.svg?height=224&width=224&query=upi%20qr"}
          alt={`UPI QR for ${upiId}`}
          className="rounded-lg border bg-background p-2 w-56 h-56 object-contain"
          width={224}
          height={224}
        />

        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-medium">Amount (optional)</label>
          <div className="flex items-center gap-2">
            <Input
              inputMode="decimal"
              placeholder="e.g. 251"
              value={amount ?? ""}
              onChange={(e) => {
                const v = e.target.value.trim();
                setAmount(v ? Number(v) : undefined);
              }}
            />
            <Button variant="secondary" onClick={() => setAmount(undefined)}>
              Clear
            </Button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
          {[101, 251, 501, 1101].map((v) => (
            <Button
              key={v}
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => setAmount(v)}
            >
              ₹{v}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button asChild>
            <a href={upiLink}>Open UPI App</a>
          </Button>
          <Button
            variant="outline"
            onClick={() => navigator.clipboard.writeText(upiId)}
            aria-label="Copy UPI ID"
          >
            Copy UPI ID
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Works with Google Pay, PhonePe, Paytm, BHIM and other UPI apps.
        </p>
      </CardContent>
    </Card>
  );
}

export default UpiQR;
